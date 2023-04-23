import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './About'
import AdminHome from './Admin/AdminHome'

import Maincategory from './Admin/Maincategory'
import AddMaincategory from './Admin/AddMaincategory'
import UpdateMaincategory from './Admin/UpdateMainCategory'

import AddSubcategory from './Admin/AddSubcategory'
import Subcategory from './Admin/Subcategory'
import UpdateSubcategory from './Admin/UpdateSubCategory'

import AddBrand from './Admin/AddBrand'
import Brand from './Admin/Brand'
import UpdateBrand from './Admin/UpdateBrand'

import AddProduct from './Admin/AddProduct'
import Product from './Admin/Product'
import UpdateProduct from './Admin/UpdateProduct'

import Cart from './Cart'
import Checkout from './Checkout'
import Confirmation from './Confirmation'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Shop from './Shop'
import SignUp from './SignUp'
import SingleProduct from './SingleProduct'
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/single-product/:id' element={<SingleProduct/>}/>
          <Route path='/confirmation' element={<Confirmation/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/update-profile' element={<UpdateProfile/>}/>

          <Route path='/admin' element={<AdminHome/>}/>
          <Route path='/admin-maincategory' element={<Maincategory/>}/>
          <Route path='/admin-add-maincategory' element={<AddMaincategory/>}/>
          <Route path='/admin-update-maincategory/:id/' element={<UpdateMaincategory/>}/>

          <Route path='/admin-subcategory' element={<Subcategory/>}/>
          <Route path='/admin-add-subcategory' element={<AddSubcategory/>}/>
          <Route path='/admin-update-subcategory/:id/' element={<UpdateSubcategory/>}/>

          <Route path='/admin-brand' element={<Brand/>}/>
          <Route path='/admin-add-brand' element={<AddBrand/>}/>
          <Route path='/admin-update-brand/:id/' element={<UpdateBrand/>}/>

          <Route path='/admin-product' element={<Product/>}/>
          <Route path='/admin-add-product' element={<AddProduct/>}/>
          <Route path='/admin-update-product/:id/' element={<UpdateProduct/>}/>


        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
