import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from "react-redux"
import { useNavigate,useParams } from 'react-router-dom'


import LeftNav from './LeftNav'

import { updateMaincategory} from "../../Store/ActionCreators/MaincategoryActionCreators"

export default function UpdateMaincategory() {
    var [name,setname] = useState("")
    const dispatch = useDispatch()
    const {id} = useParams()
    const maincategory = useSelector((state)=>state.MaincategoryStateData)
    const navigate = useNavigate()
    function getData(e){
        setname(e.target.value)
    }
    async function postData(e){
        e.preventDefault()
        var data = maincategory.find((item)=>item.name===name)
        if(data)
        alert("Maincategory Name is Already Exist!!")
        else{
            dispatch(updateMaincategory({id:id,name:name}))
            navigate('/admin-maincategory')
        }
    }
    useEffect(()=>{
        var maincat = maincategory.find((item)=>item.id==Number(id))
        setname(maincat.name)
    },[])
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-12">
                    <LeftNav />
                </div>
                <div className="col-md-9 col-12">
                    <h5 className='text-center p-3'>Maincategory</h5>
                    <form onSubmit={postData}>
                        <div className="p-3 p-lg-5 border">
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <label htmlFor="name" className="text-black">Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="name" name="name" onChange={getData} placeholder='Enter Maincategory Name' value={name}/>
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
