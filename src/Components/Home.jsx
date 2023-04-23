import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import { getProduct } from "../Store/ActionCreators/ProductActionCreators"
export default function Home() {
    var product = useSelector((state) => state.ProductStateData)
    product.reverse()
    product = product.slice(0, 8)
    var dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets/images/banner1.jpg" height="500px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/banner2.jpg" height="500px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/banner3.jpg" height="500px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/banner4.jpg" height="500px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/banner5.jpg" height="500px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/banner6.jpg" height="500px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/banner7.jpg" height="500px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/banner8.jpg" height="500px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/banner9.jpg" height="500px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/banner10.jpg" height="500px" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            {/* <div className="site-blocks-cover" style={{ backgroundImage: "url(assets/images/hero_1.jpg)" }} data-aos="fade">
                <div className="container">
                    <div className="row align-items-start align-items-md-center justify-content-end">
                        <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                            <h1 className="mb-2">Finding Your Perfect Shoes</h1>
                            <div className="intro-text text-center text-md-left">
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                                <p>
                                    <Link to="#" className="btn btn-sm btn-primary">Shop Now</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="site-section site-section-sm site-blocks-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-truck"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Free Shipping</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-refresh2"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Free Returns</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-help"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Customer Support</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section site-blocks-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
                            <Link className="block-2-item" to="#">
                                <figure className="image">
                                    <img src="assets/images/women.jpg" alt="" className="img-fluid" />
                                </figure>
                                <div className="text">
                                    <span className="text-uppercase">Collections</span>
                                    <h3>Women</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                            <Link className="block-2-item" to="#">
                                <figure className="image">
                                    <img src="assets/images/children.jpg" alt="" className="img-fluid" />
                                </figure>
                                <div className="text">
                                    <span className="text-uppercase">Collections</span>
                                    <h3>Children</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
                            <Link className="block-2-item" to="#">
                                <figure className="image">
                                    <img src="assets/images/men.jpg" alt="" className="img-fluid" />
                                </figure>
                                <div className="text">
                                    <span className="text-uppercase">Collections</span>
                                    <h3>Men</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="site-section block-3 site-blocks-2 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>Featured Products</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="nonloop-block-3 owl-carousel">
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="assets/images/cloth_1.jpg" alt="Image placeholder" className="img-fluid" />
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><Link to="#">Tank Top</Link></h3>
                                            <p className="mb-0">Finding perfect t-shirt</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="assets/images/shoe_1.jpg" alt="Image placeholder" className="img-fluid" />
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><Link to="#">Corater</Link></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="assets/images/cloth_2.jpg" alt="Image placeholder" className="img-fluid" />
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><Link to="#">Polo Shirt</Link></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="assets/images/cloth_3.jpg" alt="Image placeholder" className="img-fluid" />
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><Link to="#">T-Shirt Mockup</Link></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="assets/images/shoe_1.jpg" alt="Image placeholder" className="img-fluid" />
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><Link to="#">Corater</Link></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="row justify-content-center">
                <div className="col-md-7 site-section-heading text-center pt-4">
                    <h2>Latest Products</h2>
                </div>
            </div>
            <div className="row">
            {
                product.map((item, index) => {
                    return <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" data-aos="fade-up">
                        <div className="block-4 text-center border">
                            <figure className="block-4-image">
                                <Link to={`/single-product/${item.id}`}><img src={`assets/productimages/${item.pic1}`} className="w-100" height="250px" alt="Image placeholder"  /></Link>
                            </figure>
                            <div className="block-4-text p-4">
                                <h3 className='text-dark' style={{height:"70px"}}>{item.name}</h3>
                                <h3 className="mb-0">&#8377;<del className='text-danger'>{item.baseprice}</del><sup>{item.finalprice}</sup></h3>
                                <p className="text-primary font-weight-bold text-dark">Discount {item.discount}%</p>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
            <div className="site-section block-8">
                <div className="container">
                    <div className="row justify-content-center  mb-5">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>Big Sale!</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-7 mb-5">
                            <Link to="#"><img src="assets/images/blog_1.jpg" alt="Image placeholder" className="img-fluid rounded" /></Link>
                        </div>
                        <div className="col-md-12 col-lg-5 text-center pl-md-5">
                            <h2><Link to="#">50% less in all items</Link></h2>
                            <p className="post-meta mb-4">By <Link to="#">Carl Smith</Link> <span className="block-8-sep">&bullet;</span> September 3, 2018</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                            <p><Link to="#" className="btn btn-primary btn-sm">Shop Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
