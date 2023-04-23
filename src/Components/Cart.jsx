import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, getCart, updateCart } from '../Store/ActionCreators/CartActionCreators';

export default function Cart() {
  var [cart, setcart] = useState([])
  var [total, settotal] = useState(0)
  var [shipping, setshipping] = useState(0)
  var [final, setfinal] = useState(0)

  var carts = useSelector((state) => state.CartStateData)
  var dispatch = useDispatch()
  function deleteRecord(id) {
    dispatch(deleteCart({ id: id }))
    getAPIData()
  }
  function updateRecord(id, op) {
    var item = carts.find((item) => item.id === id)
    if (op === "dec" && item.qty === 1)
      return
    else if (op === "dec") {
      item.qty = item.qty - 1
      item.total = item.total - item.price
    }
    else {
      item.qty = item.qty + 1
      item.total = item.total + item.price
    }
    dispatch(updateCart(item))
    getAPIData()
  }
  function getAPIData() {
    dispatch(getCart())
    var data = carts.filter((item) => item.userid === localStorage.getItem("userid"))
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
  }, [carts.length])
  return (
    <>
      <div className="site-section p-1">
        <div className="container">
          <div className="row mb-5">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-name">Color</th>
                      <th className="product-name">Size</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity" style={{ width: "120px" }}>Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map((item, index) => {
                        return <tr key={index}>
                          <td className="product-thumbnail">
                            <img src={`/assets/productimages/${item.pic}`} alt="Image" height="100px" width="100px" className="rounded" />
                          </td>
                          <td className="product-name">{item.name}</td>
                          <td className="product-name">{item.color}</td>
                          <td className="product-name">{item.size}</td>
                          <td>&#8377;{item.price}</td>
                          <td style={{ width: "150px!important" }}>
                            <div className="input-group mb-3 d-flex" style={{ width: "120px" }}>
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-primary" onClick={() => updateRecord(item.id, "dec")} type="button">-</button>
                              </div>
                              <span> &nbsp;&nbsp;{item.qty}&nbsp;&nbsp;</span>
                              <div className="input-group-append">
                                <button className="btn btn-outline-primary" onClick={() => updateRecord(item.id, "inc")} type="button">+</button>
                              </div>
                            </div>

                          </td>
                          <td>&#8377;{item.total}</td>
                          <td><div className="input-group-append">
                            <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => deleteRecord(item.id)}>Remove</button>
                          </div></td>
                        </tr>

                      })
                    }
                  </tbody>
                </table>
              </div>
          </div>

          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 pl-5">
              <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
              <div className="row mb-3">
                <div className="col-md-6">
                  <span className="text-black">Subtotal</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">&#8377;{total}</strong>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <span className="text-black">Shipping</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">&#8377;{shipping}</strong>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-6">
                  <span className="text-black">Final</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">&#8377;{final}</strong>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <Link className="btn btn-primary btn-sm py-3 btn-block" to='/checkout'>Proceed To Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
