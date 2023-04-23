import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import { getProduct } from "../Store/ActionCreators/ProductActionCreators"
import { getMaincategory } from "../Store/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../Store/ActionCreators/SubcategoryActionCreators"
import { getBrand } from "../Store/ActionCreators/BrandActionCreators"


export default function Shop() {
    var [mc, setmc] = useState("All")
    var [sc, setsc] = useState("All")
    var [br, setbr] = useState("All")
    var [flag, setflag] = useState(0)
    var [shopproducts, setshopproducts] = useState([])

    var product = useSelector((state) => state.ProductStateData)
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var brand = useSelector((state) => state.BrandStateData)
    var dispatch = useDispatch()
    product.reverse()
    function getSelectedData(mc, sc, br) {
        var p = []
        if (mc === "All" && sc === "All" && br === "All")
            p = product
        else if (mc !== "All" && sc === "All" && br === "All")
            p = product.filter((item) => item.maincategory === mc)
        else if (mc === "All" && sc !== "All" && br === "All")
            p = product.filter((item) => item.subcategory === sc)
        else if (mc === "All" && sc === "All" && br !== "All")
            p = product.filter((item) => item.brand === br)
        else if (mc !== "All" && sc !== "All" && br === "All")
            p = product.filter((item) => item.maincategory === mc && item.subcategory === sc)
        else if (mc !== "All" && sc === "All" && br !== "All")
            p = product.filter((item) => item.maincategory === mc && item.brand === br)
        else if (mc === "All" && sc !== "All" && br !== "All")
            p = product.filter((item) => item.brand === br && item.subcategory === sc)
        else
            p = product.filter((item) => item.maincategory === mc && item.brand === br && item.subcategory === sc)
        setshopproducts(p)
    }
    function getSelected(e) {
        var name = e.target.name
        var value = e.target.value
        if (name === "maincategory") {
            setmc(value)
            getSelectedData(value, sc, br)
        }
        else if (name === "subcategory") {
            setsc(value)
            getSelectedData(mc, value, br)
        }
        else {
            setbr(value)
            getSelectedData(mc, sc, value)
        }
    }
    function getSort(e) {
        var value = e.target.value
        if (value === "latest")
            setshopproducts(product.sort((a, b) => a.id - b.id))
        else if (value === "ltoh")
            setshopproducts(product.sort((a, b) => a.finalprice - b.finalprice))
        else
            setshopproducts(product.sort((a, b) => b.finalprice - a.finalprice))

        if (flag === 0)
            setflag(1)
        else
            setflag(0)
    }
    function getPriceFilter(e) {
        var value = e.target.value
        var p = []
        if (value === ">5000")
            p = product.filter((item) => item.finalprice >= 5000)
        else {
            var min = value.split("-")[0]
            var max = value.split("-")[1]
            p = product.filter((item) => item.finalprice >= min && item.finalprice < max)
        }
        setshopproducts(p)
    }
    function getSizeFilter(e) {
        var value = e.target.value
        setshopproducts(product.filter((item)=>item.size===value))
    }
    useEffect(() => {
        dispatch(getProduct())
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        setshopproducts(product)
    }, [product.length])
    return (
        <>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-9 order-2">

                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <div className="d-flex justify-content-between">
                                    <div className="dropdown mr-1 ml-md-auto" style={{ width: "25%" }}>
                                        <label className='bg-secondary text-light text-center p-2 w-100'> Maincategory</label>
                                        <select name='maincategory' onChange={getSelected} className="form-control">
                                            <option value="All">All</option>
                                            {
                                                maincategory.map((item, index) => {
                                                    return <option key={index} value={item.name}>{item.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="dropdown mr-1 ml-md-auto" style={{ width: "25%" }}>
                                        <label className='bg-secondary text-light text-center p-2 w-100'> Subcategory</label>
                                        <select name='subcategory' onChange={getSelected} className="form-control">
                                            <option value="All">All</option>
                                            {
                                                subcategory.map((item, index) => {
                                                    return <option key={index} value={item.name}>{item.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="dropdown mr-1 ml-md-auto" style={{ width: "25%" }}>
                                        <label className='bg-secondary text-light text-center p-2 w-100'> Brand</label>
                                        <select name='brand' onChange={getSelected} className="form-control">
                                            <option value="All">All</option>
                                            {
                                                brand.map((item, index) => {
                                                    return <option key={index} value={item.name}>{item.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="dropdown mr-1 ml-md-auto" style={{ width: "25%" }}>
                                        <label className='bg-secondary text-light text-center p-2 w-100'> Sort By</label>
                                        <select name="sortby" className='form-control' onChange={getSort}>
                                            <option>Choose An Option</option>
                                            <option value="latest">Latest</option>
                                            <option value="ltoh">Price, Low to High</option>
                                            <option value="htol">Price, High to Low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">

                            {
                                shopproducts.map((item, index) => {
                                    return <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                                <Link to={`/single-product/${item.id}`}><img src={`assets/productimages/${item.pic1}`} className="w-100" height="150px" alt="Image placeholder" /></Link>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3 className='text-dark' style={{ height: "70px" }}>{item.name}</h3>
                                                <h3 className="mb-0">&#8377;<del className='text-danger'>{item.baseprice}</del><sup>{item.finalprice}</sup></h3>
                                                <p className="text-primary font-weight-bold text-dark">Discount {item.discount}%</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }



                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-12 text-center">
                                <div className="site-block-27">
                                    <ul>
                                        <li><a href="#">&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 order-1 mb-5 mb-md-0">
                        <div className="border p-4 rounded mb-4">
                            <div className="mb-1">
                                <h3 className="h6 text-uppercase text-black d-block">Filter by Price</h3>
                                <input type="radio" name="amount" className='text-dark' id="amount" onChange={getPriceFilter} value="0-1000" />&nbsp;&nbsp;&nbsp;&#8377;0-&#8377;1000
                                <br />
                                <input type="radio" name="amount" className='text-dark' id="amount" onChange={getPriceFilter} value="1001-2000" />&nbsp;&nbsp;&nbsp;&#8377;1001-&#8377;2000
                                <br />
                                <input type="radio" name="amount" className='text-dark' id="amount" onChange={getPriceFilter} value="2001-3000" />&nbsp;&nbsp;&nbsp;&#8377;2001-&#8377;3000
                                <br />
                                <input type="radio" name="amount" className='text-dark' id="amount" onChange={getPriceFilter} value="3001-4000" />&nbsp;&nbsp;&nbsp;&#8377;3001-&#8377;4000
                                <br />
                                <input type="radio" name="amount" className='text-dark' id="amount" onChange={getPriceFilter} value="4001-5000" />&nbsp;&nbsp;&nbsp;&#8377;4001-&#8377;5000
                                <br />
                                <input type="radio" name="amount" className='text-dark' id="amount" onChange={getPriceFilter} value=">5000" />&nbsp;&nbsp;&nbsp;{">"}&#8377;5000
                            </div>

                            <div className="mb-4">
                                <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
                                <label htmlFor="sm" className="d-flex">
                                    <input type="radio" id="sm" name='size' value='SM' onClick={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">SM</span>
                                </label>
                                <label htmlFor="md" className="d-flex">
                                    <input type="radio" id="md" name='size' value='MD' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">MD</span>
                                </label>
                                <label htmlFor="lg" className="d-flex">
                                    <input type="radio" id="lg" name='size' value='LG' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">LG</span>
                                </label>
                                <label htmlFor="xl" className="d-flex">
                                    <input type="radio" id="xl" name='size' value='XL' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">XL</span>
                                </label>
                                <label htmlFor="xxl" className="d-flex">
                                    <input type="radio" id="xxl" name='size' value='XXL' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">XXL</span>
                                </label>

                                <label htmlFor="24" className="d-flex">
                                    <input type="radio" id="24" name='size' value='24' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">24</span>
                                </label>
                                <label htmlFor="26" className="d-flex">
                                    <input type="radio" id="26" name='size' value='26' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">26</span>
                                </label>
                                <label htmlFor="28" className="d-flex">
                                    <input type="radio" id="28" name='size' value='28' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">28</span>
                                </label>
                                <label htmlFor="30" className="d-flex">
                                    <input type="radio" id="30" name='size' value='30' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">30</span>
                                </label>
                                <label htmlFor="32" className="d-flex">
                                    <input type="radio" id="32" name='size' value='32' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">32</span>
                                </label>
                                <label htmlFor="34" className="d-flex">
                                    <input type="radio" id="34" name='size' value='34' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">34</span>
                                </label>
                                <label htmlFor="36" className="d-flex">
                                    <input type="radio" id="36" name='size' value='36' onChange={getSizeFilter} className="mr-2 mt-1" /> <span className="text-black">36</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
