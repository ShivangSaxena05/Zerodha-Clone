import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './landing page/Home/Homepage';
import Signup from './landing page/signup/Signup'
import About from './landing page/about/About'
import Pricing from './landing page/pricing/Pricing';
import Product from './landing page/products/Product'
import Support from './landing page/support/Support'
import Navbar from './landing page/Navbar';
import Login from "./landing page/signup/login"
import Footer from './landing page/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Pricing' element={<Pricing/>}></Route>
    <Route path='/Product' element={<Product/>}></Route>
    <Route path='/Support' element={<Support/>}></Route>
    <Route path="/login" element={<Login/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
);