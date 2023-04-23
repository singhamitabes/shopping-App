import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import LeftNav from './LeftNav'

import { DataGrid } from '@mui/x-data-grid';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, getProduct } from '../../Store/ActionCreators/ProductActionCreators';


export default function Product() {
    var product = useSelector((state) => state.ProductStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    const columns = [
        { field: 'id', headerName: 'Id', width: 50 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'maincategory', headerName: 'Maincategory', width: 100 },
        { field: 'subcategory', headerName: 'Subcategory', width: 100 },
        { field: 'brand', headerName: 'Brand', width: 120 },
        { field: 'color', headerName: 'Color', width: 70 },
        { field: 'size', headerName: 'Size', width: 70 },
        { field: 'baseprice', headerName: 'Base Price', width: 100 },
        { field: 'discount', headerName: 'Discount', width: 70 },
        { field: 'finalprice', headerName: 'Final Price', width: 100 },
        { field: 'stock', headerName: 'Stock', width: 100 },
        { field: 'pic1', headerName: 'Pic1', width: 70, renderCell: ({ row }) => <img src={`/assets/productimages/${row.pic1}`} height="50px" width="100%" className='rounded' alt=''/>},
        { field: 'pic2', headerName: 'Pic2', width: 70, renderCell: ({ row }) => <img src={`/assets/productimages/${row.pic2}`} height="50px" width="100%" className='rounded' alt=''/> },
        { field: 'pic3', headerName: 'Pic3', width: 70, renderCell: ({ row }) => <img src={`/assets/productimages/${row.pic3}`} height="50px" width="100%" className='rounded' alt=''/> },
        { field: 'pic4', headerName: 'Pic4', width: 70, renderCell: ({ row }) => <img src={`/assets/productimages/${row.pic4}`} height="50px" width="100%" className='rounded' alt=''/> },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-update-product/" + row.id)
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
                <Button onClick={() => dispatch(deleteProduct({ id: row.id }))}>
                    <span className="material-symbols-outlined">
                        delete_forever
                    </span>
                </Button>,
        }
    ];
    var rows = []
    for (let item of product) {
        rows.push(item)
    }
    function getAPIData() {
        dispatch(getProduct())
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
                    <h5 className='text-center p-3'>Product <Link to="/admin-add-product"><span className="material-symbols-outlined float-right">add</span></Link></h5>
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
