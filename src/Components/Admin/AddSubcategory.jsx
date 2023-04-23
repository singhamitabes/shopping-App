import React,{useState,useEffect} from 'react'
import LeftNav from './LeftNav'

import {addSubcategory} from "../../Store/ActionCreators/SubcategoryActionCreators"
import {useSelector,useDispatch} from "react-redux"

import { useNavigate } from 'react-router-dom'
export default function AddSubcategory() {
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var [name,setname] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function getData(e){
        setname(e.target.value)
    }
    async function postData(e){
        e.preventDefault()
        var subcat = subcategory.find((item)=>item.name==name)
        if(subcat)
        alert("Subcategory Aleady Exist!!!!")
        else{
            dispatch(addSubcategory({name}))
            navigate('/admin-subcategory')
        }
    }
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
                                    <input type="text" className="form-control" id="name" name="name" onChange={getData} placeholder='Enter Subcategory Name'/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-12">
                                    <button type='submit' className='btn btn-primary btn-lg btn-block'>Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
