import React from 'react'

import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <footer className="site-footer border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-6 mb-lg-0">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="footer-heading mb-4">Navigations</h3>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <ul className="list-unstyled">
                                        <li><Link to="#">Home</Link></li>
                                        <li><Link to="#">About</Link></li>
                                        <li><Link to="#">Shop</Link></li>
                                        <li><Link to="#">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <ul className="list-unstyled">
                                        <li><Link to="#">Profile</Link></li>
                                        <li><Link to="#">Cart</Link></li>
                                        <li><Link to="#">Checkout</Link></li>
                                        <li><Link to="#">Logout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="block-5 mb-5">
                                <h3 className="footer-heading mb-4">Contact Information</h3>
                                <ul className="list-unstyled">
                                    <li className="address">A-43, Sector 16, Noida, UP , India</li>
                                    <li className="phone"><Link to="tel://9873848046">9873848046</Link></li>
                                    <li className="email">vishankchauhan@gmail.com</li>
                                </ul>
                            </div>

                            <div className="block-7">
                                <form action="#" method="post">
                                    <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
                                    <div className="form-group">
                                        <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email" />
                                        <input type="submit" className="btn btn-sm btn-primary" style={{width:"30%"}} value="Subscribe" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
