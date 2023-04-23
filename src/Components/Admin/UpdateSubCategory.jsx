import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from "react-redux"
import { useNavigate,useParams } from 'react-router-dom'


import LeftNav from './LeftNav'

import {updateSubcategory} from "../../Store/ActionCreators/SubcategoryActionCreators"

export default function UpdateSubcategory() {
    var [name,setname] = useState("")
    const dispatch = useDispatch()
    const {id} = useParams()
    const subcategory = useSelector((state)=>state.SubcategoryStateData)
    const navigate = useNavigate()
    function getData(e){
        setname(e.target.value)
    }
    async function postData(e){
        e.preventDefault()
        var data = subcategory.find((item)=>item.name===name)
        if(data)
        alert("Subcategory Name is Already Exist!!")
        else{
            dispatch(updateSubcategory({id:id,name:name}))
            navigate('/admin-subcategory')
        }
    }
    useEffect(()=>{
        var subcat = subcategory.find((item)=>item.id==Number(id))
        setname(subcat.name)
    },[])
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-12">
                    <LeftNav />
                </div>
                <div className="col-md-9 col-12">
                    <h5 className='text-center p-3'>Subcategory</h5>
                    <form onSubmit={postData}>
                        <div className="p-3 p-lg-5 border">
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <label htmlFor="name" className="text-black">Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="name" name="name" onChange={getData} placeholder='Enter Subcategory Name' value={name}/>
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
