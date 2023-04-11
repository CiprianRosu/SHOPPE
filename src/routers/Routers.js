import React from 'react'
import {Routes , Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Page404 from '../pages/Page404'
import Shop from '../pages/Shop'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import PlaceOrder from '../pages/PlaceOrder'
import PrivateTerms from '../pages/PrivateTerms'
import ProductDetails from '../pages/ProductDetails'


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to = "home"/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='placeorder' element={<PlaceOrder/>}/>
        <Route path='privateterms' element={<PrivateTerms/>}/>
        <Route path='page404' element={<Page404/>}/>
        </Routes>
}

export default Routers