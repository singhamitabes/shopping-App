import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateUser, getUser } from '../Store/ActionCreators/UserActionCreators'
import { useNavigate } from 'react-router-dom'
export default function UpdateProfile() {
    let [data, setdata] = useState({
        name: "",
        pic: "",
        email: "",
        phone: "",
        addressline1: "",
        addressline2: "",
        addressline3: "",
        pin: "",
        city: "",
        state: ""
    })
    var user = useSelector((state) => state.UserStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
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
    function postData(e) {
        e.preventDefault()
        var item = {
            name: data.name,
            pic: data.pic,
            email: data.email,
            phone: data.phone,
            addressline1: data.addressline1,
            addressline2: data.addressline2,
            addressline3: data.addressline3,
            pin: data.pin,
            city: data.city,
            state: data.state,
            username: data.username,
            password: data.password,
            role: data.role,
            id: data.id,
        }
        dispatch(updateUser(item))
        navigate("/profile")
        
    }
    useEffect(() => {
        dispatch(getUser())
        var data = user.find((item)=>item.id===Number(localStorage.getItem("userid")))
        if(data)
        setdata(data)
    }, [user.length])
    return (
        <>
            <div style={{ width: "100vw" }}>
                <div className="register-box" style={{ width: "70%", margin: "auto" }}>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg text-center">Update Profile</p>
                            <form onSubmit={postData}>
                                <div className="row mb-3">
                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Full name" name='name' onChange={getData} value={data.name} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="material-symbols-outlined">
                                                    person
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group col-md-6">
                                        <input type="file" className="form-control" name='pic' onChange={getFile} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="material-symbols-outlined">
                                                    image
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="input-group col-md-6">
                                        <input type="email" className="form-control" placeholder="Email" name='email' onChange={getData} value={data.email} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="material-symbols-outlined">
                                                    email
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Phone Number" name='phone' onChange={getData} value={data.phone} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="material-symbols-outlined">
                                                    phone
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Enter House, Floor Or Building Number" name='addressline1' onChange={getData} value={data.addressline1} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="material-symbols-outlined">
                                                    home
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Enter Street Number or Near By" name='addressline2' onChange={getData} value={data.addressline2} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="material-symbols-outlined">
                                                    home
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Enter Village or Locality" name='addressline3' onChange={getData} value={data.addressline3} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="material-symbols-outlined">
                                                    home
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Enter Pin Code" name='pin' onChange={getData} value={data.pin} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="material-symbols-outlined">
                                                    PIN
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Enter City Name" name='city' onChange={getData} value={data.city} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="material-symbols-outlined">
                                                    home
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Enter State Name" name='state' onChange={getData} value={data.state} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="material-symbols-outlined">
                                                    home
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-primary btn-block">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
