import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import LeftNav from './LeftNav'

import { Link, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

import { useSelector, useDispatch } from 'react-redux';
import { deleteBrand, getBrand } from '../../Store/ActionCreators/BrandActionCreators';


export default function Brand() {
    var brand = useSelector((state) => state.BrandStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    const columns = [
        { field: 'id', headerName: 'id', width: 70 },
        { field: 'name', headerName: 'name', width: 130 },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-update-brand/" + row.id)
                }}>
                    <span className="material-symbols-outlined">
                        edit
                    </span>
                </Button>,
        },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => dispatch(deleteBrand({ id: row.id }))}>
                    <span className="material-symbols-outlined">
                        delete_forever
                    </span>
                </Button>,
        }
    ];
    var rows = []
    for (let item of brand) {
        rows.push(item)
    }
    function getAPIData() {
        dispatch(getBrand())
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-12">
                    <LeftNav />
                </div>
                <div className="col-md-9 col-12">
                    <h5 className='text-center p-3'>Brand <Link to="/admin-add-brand"><span className="material-symbols-outlined float-right">add</span></Link></h5>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        // checkboxSelection
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
