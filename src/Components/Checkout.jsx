import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from '../Store/ActionCreators/UserActionCreators'
import { getCart } from '../Store/ActionCreators/CartActionCreators';
import { addCheckout } from '../Store/ActionCreators/CheckoutActionCreators';

import BuyerProfile from './BuyerProfile'
import { useNavigate } from 'react-router-dom';
export default function Checkout() {
  var [mode,setmode] = useState("COD")
  var [user, setuser] = useState({})
  var [cart, setcart] = useState([])
  var [total, settotal] = useState(0)
  var [shipping, setshipping] = useState(0)
  var [final, setfinal] = useState(0)
  var users = useSelector((state) => state.UserStateData)
  var carts = useSelector((state) => state.CartStateData)
  var dispatch = useDispatch()
  var navigate = useNavigate()

  function getData(e){
    setmode(e.target.value)
  }
  function placeOrder(){
    var item = {
      userid:localStorage.getItem("userid"),
      paymentmode:mode,
      orderstatus:"Order Placed",
      paymentstatus:"Pending",
      totalAmount:total,
      shippingAmount:shipping,
      finalAmount:final,
      date:new Date(),
      products:cart
    }
    dispatch(addCheckout(item))
    navigate("/confirmation")
  }
  function getAPIData() {
    dispatch(getUser())
    var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
    if (data)
      setuser(data)

    dispatch(getCart())
    data = carts.filter((item) => item.userid === localStorage.getItem("userid"))
    setcart(data)
    var total = 0
    var shipping = 0
    var final = 0
    for (let item of data) {
      total = total + item.total
    }
    if (total > 0 && total <= 1000)
      shipping = 150
    final = total + shipping

    settotal(total)
    setshipping(shipping)
    setfinal(final)
  }
  useEffect(() => {
    getAPIData()
  }, [users.length])
  return (
    <>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mb-5 mb-md-0">
              <BuyerProfile user={user} />
            </div>
            <div className="col-md-7">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h5 className="text-center">Your Order</h5>
                  <div className="p-3 p-lg-5 border">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <th>Product</th>
                        <th>Total</th>
                      </thead>
                      <tbody>
                        {
                          cart.map((item, index) => {
                            return <tr key={index}>
                              <td>{item.name} (&#8377;{item.price} <strong className="mx-2">x</strong> {item.qty})</td>
                              <td>&#8377;{item.total}</td>
                            </tr>
                          })
                        }

                        <tr>
                          <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                          <td className="text-black">&#8377;{total}</td>
                        </tr>
                                                <tr>
                          <td className="text-black font-weight-bold"><strong>Shipping</strong></td>
                          <td className="text-black">&#8377;{shipping}</td>
                        </tr>
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                          <td className="text-black font-weight-bold"><strong>&#8377;{final}</strong></td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="mb-3">
                      <label>Payment Mode</label>
                      <select name="mode" className='form-control' onChange={getData}>
                        <option value="COD">COD</option>
                        <option value="NetBanking">NetBanking/Card/UPI</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary btn-sm btn-block" onclick={placeOrder}>Place Order</button>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
