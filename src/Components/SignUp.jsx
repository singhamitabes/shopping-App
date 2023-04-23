import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { registerUser, getUser } from '../Store/ActionCreators/UserActionCreators'
import { Link, useNavigate } from 'react-router-dom'
export default function SignUp() {
    let [data, setdata] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    var [show, setshow] = useState(false)
    var [msg, setmsg] = useState("")
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
    function postData(e) {
        e.preventDefault()
        if (data.password === data.cpassword) {
            var item = user.find((item) => item.username === data.username)
            if (item) {
                setshow(true)
                setmsg("UserName Already Taken!!!")
            }
            else {
                var item = {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    role: "User"
                }
                dispatch(registerUser(item))
                navigate("/login")
            }
        }
        else {
            setshow(true)
            setmsg("Password and Confirm Password Doesn't Matched!!!!")
        }
    }
    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <>
            {/* <div className='container'>
                <h5 className='text-center'>Signup Page</h5>
                <form onSubmit={postData}>
                    <div className="p-3 p-lg-5 border">
                        <div className="form-group row">
                            <div className="col-md-6 col-12">
                                <label htmlFor="name" className="text-black">Full Name<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="name" required name="name" onChange={getData} placeholder='Enter Full Name' />
                            </div>
                            <div className="col-md-6 col-12">
                                <label htmlFor="username" className="text-black">User Name<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="username" required name="username" onChange={getData} placeholder='Enter User Name' />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6 col-12">
                                <label htmlFor="name" className="text-black">Email Address<span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="email" required name="email" onChange={getData} placeholder='Enter Email Addres' />
                            </div>
                            <div className="col-md-6 col-12">
                                <label htmlFor="phone" className="text-black">Phone Number<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="phone" required name="phone" onChange={getData} placeholder='Enter Phone Number' />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6 col-12">
                                <label htmlFor="password" className="text-black">Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control" id="password" required name="password" onChange={getData} placeholder="Enter Password" />
                            </div>
                            <div className="col-md-6 col-12">
                                <label htmlFor="cpassword" className="text-black">Confirm Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control" id="cpassword" required name="cpassword" onChange={getData} placeholder="Confirm Enter Password" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-12">
                                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Create Account" />
                            </div>
                        </div>
                        <Link to="/login" className='text-decoration-none'>Already User?Login to Your Acount</Link>
                    </div>
                </form>
            </div> */}
            <div style={{ width: "100vw" }}>
                <div className="register-box" style={{ width: "50%", margin: "auto" }}>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg text-center">Create a Free Account</p>
                            {
                                show ? <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
                                    {msg}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div> : ""
                            }
                            <form onSubmit={postData}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Full name" name='name' onChange={getData} required minLength={3} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="material-symbols-outlined">
                                                person
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="User Name" name='username' onChange={getData}  required minLength={3} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="material-symbols-outlined">
                                                person
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" name='email' onChange={getData}  required minLength={13}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="material-symbols-outlined">
                                                email
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Phone Number" name='phone' onChange={getData}  required minLength={10}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="material-symbols-outlined">
                                                phone
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" name='password' onChange={getData}  required minLength={8}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="material-symbols-outlined">
                                                lock
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Confirm password" name='cpassword' onChange={getData}  required minLength={8}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="material-symbols-outlined">
                                                lock
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                                            <label htmlFor="agreeTerms">
                                                I agree to the <a href="#">terms</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <button type="submit" className="btn btn-primary btn-block">Create</button>
                                    </div>
                                </div>
                            </form>

                            <div className="social-auth-links text-center">
                                <p>- OR -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2 btn-sm"></i>
                                    Sign up using Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2"></i>
                                    Sign up using Google+
                                </a>
                            </div>

                            <Link to="/login" className="text-center">Already have an Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
