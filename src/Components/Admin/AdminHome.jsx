import React from 'react'
import { Link } from 'react-router-dom'
import LeftNav from './LeftNav'

export default function AdminHome() {
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-12">
                    <LeftNav />
                </div>
                <div className="col-md-9 col-12">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="assets/images/user.jpg" className='w-100' height="450px" alt="" />
                        </div>
                        <div className="col-md-6">
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>Nitin Chauhan</td>
                                    </tr>
                                    <tr>
                                        <th>User Name</th>
                                        <td>admin</td>
                                    </tr>
                                    <tr>
                                        <th>Email Address</th>
                                        <td>vishankchauhan@gmail</td>
                                    </tr>
                                    <tr>
                                        <th>Phone</th>
                                        <td>9873848046</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <Link to="#" className='btn btn-primary btn-lg btn-block'>Update Profile</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
