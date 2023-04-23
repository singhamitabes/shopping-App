import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import LeftNav from './LeftNav'

import { Link, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

import { useSelector, useDispatch } from 'react-redux';
import { deleteMaincategory, getMaincategory } from '../../Store/ActionCreators/MaincategoryActionCreators';


export default function Maincategory() {
    var maincategory = useSelector((state) => state.MaincategoryStateData)
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
                    navigate("/admin-update-maincategory/" + row.id)
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
                <Button onClick={() => dispatch(deleteMaincategory({ id: row.id }))}>
                    <span className="material-symbols-outlined">
                        delete_forever
                    </span>
                </Button>,
        }
    ];
    var rows = []
    for (let item of maincategory) {
        rows.push(item)
    }
    function getAPIData() {
        dispatch(getMaincategory())
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
                    <h5 className='text-center p-3'>Maincategory <Link to="/admin-add-maincategory"><span className="material-symbols-outlined float-right">add</span></Link></h5>
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
