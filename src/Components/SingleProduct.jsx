import React, { useState, useEffect } from 'react'
import { useParams,useNavigate} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../Store/ActionCreators/ProductActionCreators';
import { getCart,addCart } from '../Store/ActionCreators/CartActionCreators';
import { getWishlist,addWishlist } from '../Store/ActionCreators/WishlistActionCreators';

export default function SingleProduct() {
    var [q,setq] = useState(1)
    var [p, setp] = useState({})
    var product = useSelector((state) => state.ProductStateData)
    var cart = useSelector((state) => state.CartStateData)
    var wishlist = useSelector((state) => state.WishlistStateData)
    var dispatch = useDispatch()
    var { id } = useParams()
    var navigate = useNavigate()
    function getAPIData() {
        dispatch(getProduct())
        dispatch(getCart())
        dispatch(getWishlist())
    }
    function getData(e){
        setq(e.target.value)
    }
    function addToCart(){
        var d = cart.find((item)=>item.productid===p.id && item.userid===localStorage.getItem("userid"))
        if(d)
        navigate("/cart")
        else{
            var item = {
                productid:p.id,
                userid:localStorage.getItem("userid"),
                name:p.name,
                color:p.color,
                size:p.size,
                price:p.finalprice,
                qty:q,
                total:q*p.finalprice,
                pic:p.pic1
            }
            dispatch(addCart(item))
            navigate("/cart")
        }
    }
    function addToWishlist(){
        var d = wishlist.find((item)=>item.productid===p.id && item.userid===localStorage.getItem("userid"))
        if(d)
        navigate("/profile")
        else{
            var item = {
                productid:p.id,
                userid:localStorage.getItem("userid"),
                name:p.name,
                color:p.color,
                size:p.size,
                price:p.finalprice,
                pic:p.pic1
            }
            dispatch(addWishlist(item))
            navigate("/profile")
        }
    }
    useEffect(() => {
        getAPIData()
        var p = product.find((item) => item.id === Number(id))
        if(p)
        setp(p)
    }, [product.length])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={`/assets/productimages/${p.pic1}`} height="600px" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={`/assets/productimages/${p.pic2}`} height="600px" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={`/assets/productimages/${p.pic3}`} height="600px" alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={`/assets/productimages/${p.pic4}`} height="600px" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <td colSpan={2} className="text-center"><strong>{p.name}</strong></td>
                                </tr>
                                <tr>
                                    <th>Maincategory</th>
                                    <td>{p.maincategory}</td>
                                </tr>
                                <tr>
                                    <th>Subcategory</th>
                                    <td>{p.subcategory}</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td>{p.brand}</td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td>{p.color}</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>{p.size}</td>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <td>&#8377;<del className='text-danger'>{p.baseprice}</del><sup>{p.finalprice}</sup></td>
                                </tr>
                                <tr>
                                    <th>Discount</th>
                                    <td>{p.discount}</td>
                                </tr>
                                <tr>
                                    <th>Stock</th>
                                    <td>{p.stock}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{p.description}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mb-5 d-flex justify-content-between">
                            <div className="input-group mb-3" style={{ width: "32%" }}>
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={()=>{
                                        if(q>1)
                                        setq(Number(q)-1)
                                    }}>-</button>
                                </div>
                                <input type="text" className="form-control text-center" min={1} value={q} onChange={getData} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={()=>setq(Number(q)+1)}>+</button>
                                </div>
                            </div>
                            <div style={{ width: "67%" }} className="d-flex justify-content-between">
                                <p><button  className="buy-now btn btn-sm btn-primary" onClick={addToCart}>Add to Cart</button></p>
                                <p><button  className="buy-now btn btn-sm btn-primary" onClick={addToWishlist}>Add to Wishlist</button></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
