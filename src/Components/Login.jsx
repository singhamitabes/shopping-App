import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from '../Store/ActionCreators/UserActionCreators'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    let [data, setdata] = useState({
        username: "",
        password: ""
    })
    var [show, setshow] = useState(false)
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
        var d = user.find((item)=>item.username===data.username && item.password===data.password)
        if (d){
            localStorage.setItem("login",true)
            localStorage.setItem("name",d.name)
            localStorage.setItem("username",d.username)
            localStorage.setItem("password",d.password)
            localStorage.setItem("userid",d.id)
            navigate("/profile")
        }
        else
            setshow(true)
    }
    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <>
            {/* <div className='row m-3'>
                <div className='col-md-2 col-1'></div>
                <div className='col-md-8 col-10'>
                    <h5 className='text-center'>Login Page</h5>
                    <form onSubmit={postData}>
                        <div className="p-3 p-lg-5 border">
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <label htmlFor="username" className="text-black">User Name<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="username" required name="username" onChange={getData} placeholder='Enter User Name' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <label htmlFor="password" className="text-black">Password <span className="text-danger">*</span></label>
                                    <input type="password" className="form-control" id="password" required name="password" onChange={getData} placeholder="Enter Password" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-12">
                                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="Login" />
                                </div>
                            </div>
                            <div className='' style={{ display: "flex", justifyContent: "space-between" }}>
                                <Link to="#" className='text-decoration-none'>Forget Password</Link>
                                <Link to="/signup" className='text-decoration-none'>New User?Create a Free Acount</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-md-2 col-1'></div>
            </div> */}
            <div className="login-box" style={{ width: "50vw", margin: "auto" }}>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg text-center">Login to Your Account</p>
                        {
                            show ? <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
                                Invalid Username or Password!!!
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div> : ""
                        }
                        <form onSubmit={postData}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" name='username' onChange={getData} placeholder="Username" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="material-symbols-outlined">
                                            person
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" name='password' onChange={getData} placeholder="Password" />
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
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <button type="submit" className="btn btn-primary btn-block btn-sm">Log In</button>
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary btn-sm">
                                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                            </a>
                        </div>

                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <Link to="/signup" className="text-center">New User?Create a Free Account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
