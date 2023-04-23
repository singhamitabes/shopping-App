import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'

import { addProduct } from "../../Store/ActionCreators/ProductActionCreators"
import { getMaincategory } from "../../Store/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../../Store/ActionCreators/SubcategoryActionCreators"
import { getBrand } from "../../Store/ActionCreators/BrandActionCreators"
import { useSelector, useDispatch } from "react-redux"

import { useNavigate } from 'react-router-dom'
export default function AddProduct() {
    var product = useSelector((state) => state.ProductStateData)
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var brand = useSelector((state) => state.BrandStateData)
    var [data, setdata] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: "",
        size: "",
        stock: "In Stock",
        description: "This is a Sample Product",
        baseprice: 0,
        discount: 0,
        finalprice: 0,
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function getFile(e) {
        var name = e.target.name
        var value = e.target.files[0].name
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var fp = data.baseprice-data.baseprice*data.discount/100
        var item = {
            name:data.name,
            maincategory:data.maincategory,
            subcategory:data.subcategory,
            brand:data.brand,
            color:data.color,
            size:data.size,
            baseprice:data.baseprice,
            discount:data.discount,
            finalprice:fp,
            stock:data.stock,
            description:data.description,
            pic1:data.pic1,
            pic2:data.pic2,
            pic3:data.pic3,
            pic4:data.pic4
        }
        dispatch(addProduct(item))
        navigate("/admin-product")
    }
    useEffect(()=>{
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
    },[])
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-12">
                    <LeftNav />
                </div>
                <div className="col-md-9 col-12">
                    <h5 className='text-center p-3'>Product</h5>
                    <form onSubmit={postData}>
                        <div className="p-3 p-lg-5 border">
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <label htmlFor="name" className="text-black">Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="name" name="name" onChange={getData} placeholder='Enter Product Name' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="maincategory" className="text-black">Maincategory <span className="text-danger">*</span></label>
                                    <select name='maincategory' className='form-control' onChange={getData}>
                                        {
                                            maincategory.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="subcategory" className="text-black">Subcategory <span className="text-danger">*</span></label>
                                    <select name='subcategory' className='form-control' onChange={getData}>
                                        {
                                            subcategory.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="brand" className="text-black">Brand <span className="text-danger">*</span></label>
                                    <select name='brand' className='form-control' onChange={getData}>
                                        {
                                            brand.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="stock" className="text-black">Stock <span className="text-danger">*</span></label>
                                    <select name='stock' className='form-control' onChange={getData}>
                                        <option value="In Stock">In Stock</option>
                                        <option value="Out Of Stock">Out Of Stock</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="color" className="text-black">Color <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="color" name="color" onChange={getData} placeholder='Enter Color Name' />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="size" className="text-black">Size <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="size" name="size" onChange={getData} placeholder='Enter Size Name' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="baseprice" className="text-black">Base Price <span className="text-danger">*</span></label>
                                    <input type="number" className="form-control" id="baseprice" name="baseprice" onChange={getData} placeholder='Enter Base Price' />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="discount" className="number-black">Discount <span className="text-danger">*</span></label>
                                    <input type="number" className="form-control" id="discount" name="discount" onChange={getData} placeholder='Enter Discount' />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="text-black">Description <span className="text-danger">*</span></label>
                                <textarea name="description" id="description" rows="5" className='form-control' onChange={getData} value={data.description}></textarea>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic1" className="text-black">Pic1</label>
                                    <input type="file" name="pic1" onChange={getFile} id="pic1" className='form-control'/>
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic2" className="text-black">Pic2</label>
                                    <input type="file" name="pic2" onChange={getFile} id="pic2" className='form-control'/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic3" className="text-black">Pic3</label>
                                    <input type="file" name="pic3" onChange={getFile} id="pic3" className='form-control'/>
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic4" className="text-black">Pic4</label>
                                    <input type="file" name="pic4" onChange={getFile} id="pic4" className='form-control'/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <button type='submit' className='btn btn-primary btn-lg btn-block'>Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
