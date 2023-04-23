import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from '../Store/ActionCreators/UserActionCreators'
import { deleteWishlist, getWishlist } from '../Store/ActionCreators/WishlistActionCreators'
import { Link } from 'react-router-dom'
import BuyerProfile from './BuyerProfile'
export default function Profile() {
    var [wishlist, setwishlist] = useState([])
    var wishlists = useSelector((state) => state.WishlistStateData)
    var [user, setuser] = useState({})
    var users = useSelector((state) => state.UserStateData)
    var dispatch = useDispatch()
    function deleteRecord(id) {
        dispatch(deleteWishlist({ id: id }))
        getAPIData()
    }
    function getAPIData() {
        dispatch(getUser())
        dispatch(getWishlist())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setuser(data)

        data = wishlists.filter((item) => item.userid === localStorage.getItem("userid"))
        setwishlist(data)
    }
    useEffect(() => {
        getAPIData()
    }, [users.length,wishlists.length])
    return (
        <>
            <div className="container-fluid my-2">
                <div className="row">
                    <div className="col-md-6">
                        {
                            user.pic ?
                                <img src={`/assets/productimages/${user.pic}`} height="620px" width="100%" alt="" /> :
                                <img src={`/assets/images/noimage.png`} height="620px" width="100%" alt="" />
                        }
                    </div>
                    <div className="col-md-6">
                        <BuyerProfile user={user}/>
                    </div>
                </div>
                <hr />
                <h5 className='text-center mt-3'>Wishlist Section</h5>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="product-thumbnail">Image</th>
                                <th className="product-name">Product</th>
                                <th className="product-name">Color</th>
                                <th className="product-name">Size</th>
                                <th className="product-price">Price</th>
                                <th className="product-remove"></th>
                                <th className="product-remove"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishlist.map((item, index) => {
                                    return <tr key={index}>
                                        <td className="product-thumbnail">
                                            <img src={`/assets/productimages/${item.pic}`} alt="Image" height="100px" width="100px" className="rounded" />
                                        </td>
                                        <td className="product-name">{item.name}</td>
                                        <td className="product-name">{item.color}</td>
                                        <td className="product-name">{item.size}</td>
                                        <td>&#8377;{item.price}</td>
                                        <td>
                                            <div className="input-group-append">
                                                <Link to={`/single-product/${item.productid}`} className="btn btn-outline-primary js-btn-plus" type="Link">Buy</Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => deleteRecord(item.id)}>Remove</button>
                                            </div>
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
