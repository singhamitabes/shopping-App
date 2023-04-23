import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import {  getCart } from '../Store/ActionCreators/CartActionCreators';

export default function Navbar() {
    var [count,setcount] = useState(0)
    var navigate = useNavigate()
    var carts = useSelector((state)=>state.CartStateData)
    function logout(){
        localStorage.clear()
        navigate("/login")
    }
    useEffect(()=>{
        var cart = carts.filter((item)=>item.userid===localStorage.getItem("userid"))
        setcount(cart.length)
    },[carts.length])
    return (
        <>
            <div className="site-wrap">
                <header className="site-navbar mt-5" role="banner">
                    <div className="site-navbar-top">
                        <div className="container">
                            <div className="row align-items-center">

                                <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                                    <form action="" className="site-block-top-search">
                                        <span className="icon icon-search2"></span>
                                        <input type="text" className="form-control border-0" placeholder="Search" />
                                    </form>
                                </div>

                                <div className="col-12 mb-1 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                                    <div className="site-logo">
                                        <Link to="/" className="js-logo-clone">Shopia</Link>
                                    </div>
                                </div>

                                <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                                    <div className="site-top-icons">
                                        <ul>
                                            {
                                                localStorage.getItem("login") ?
                                                    <>
                                                        <li><Link to="/profile">Nitin Chauhan<span className="icon icon-person"></span></Link></li>
                                                        <li>
                                                            <Link to="/cart" className="site-cart">Cart
                                                                <span className="icon icon-shopping_cart"></span>
                                                                <span className="count">{count}</span>
                                                            </Link>
                                                        </li>
                                                        <li><button className='border-0' style={{background:"none"}} onClick={logout}>Logout <i className="bi bi-box-arrow-right fs-5"></i></button></li>
                                                    </> :
                                                    <li><Link to="/login">Login<i className="bi bi-box-arrow-in-right fs-5"></i></Link></li>
                                            }
                                            <li className="d-inline-block d-md-none ml-md-0"><Link to="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <nav className="site-navigation text-right text-md-center fixed-top bg-light" role="navigation">
                        <div className="container">
                            <ul className="site-menu js-clone-nav d-none d-md-block">
                                <li className=" active"><Link to="/">Home</Link></li>
                                <li className=""><Link to="/about">About</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/admin">Admin</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}
