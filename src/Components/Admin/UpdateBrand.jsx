import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from "react-redux"
import { useNavigate,useParams } from 'react-router-dom'


import LeftNav from './LeftNav'

import { updateBrand} from "../../Store/ActionCreators/BrandActionCreators"

export default function UpdateBrand() {
    var [name,setname] = useState("")
    const dispatch = useDispatch()
    const {id} = useParams()
    const brand = useSelector((state)=>state.BrandStateData)
    const navigate = useNavigate()
    function getData(e){
        setname(e.target.value)
    }
    async function postData(e){
        e.preventDefault()
        var data = brand.find((item)=>item.name===name)
        if(data)
        alert("Brand Name is Already Exist!!")
        else{
            dispatch(updateBrand({id:id,name:name}))
            navigate('/admin-brand')
        }
    }
    useEffect(()=>{
        var maincat = brand.find((item)=>item.id==Number(id))
        setname(maincat.name)
    },[])
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-12">
                    <LeftNav />
                </div>
                <div className="col-md-9 col-12">
                    <h5 className='text-center p-3'>Brand</h5>
                    <form onSubmit={postData}>
                        <div className="p-3 p-lg-5 border">
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <label htmlFor="name" className="text-black">Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="name" name="name" onChange={getData} placeholder='Enter Brand Name' value={name}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-12">
                                    <button type='submit' className='btn btn-primary btn-lg btn-block'>Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
