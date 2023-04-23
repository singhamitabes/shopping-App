import React from 'react'
import { Link } from 'react-router-dom'
export default function LeftNav() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item list-group-item-action">Home <i className="bi bi-house-door float-right"></i></Link>
                <Link to="/admin-user" className="list-group-item list-group-item-action">Users <i className="bi bi-person float-right"></i></Link>
                <Link to="/admin-maincategory" className="list-group-item list-group-item-action">Maincategories <i className="bi bi-bag float-right"></i></Link>
                <Link to="/admin-subcategory" className="list-group-item list-group-item-action">Subcategories <i className="bi bi-bag float-right"></i></Link>
                <Link to="/admin-brand" className="list-group-item list-group-item-action">Brands <i className="bi bi-bag float-right"></i></Link>
                <Link to="/admin-product" className="list-group-item list-group-item-action">Products <i className="bi bi-bag float-right"></i></Link>
                <Link to="/admin-checkout" className="list-group-item list-group-item-action">Checkouts <i className="bi bi-bag-check float-right"></i></Link>
                <Link to="/admin-contact" className="list-group-item list-group-item-action">Contacts <i className="bi bi-person-lines-fill float-right"></i></Link>
                <Link to="/admin-newslatter" className="list-group-item list-group-item-action">Newslatters <i className="bi bi-envelope float-right"></i></Link>
            </div>
        </>
    )
}
