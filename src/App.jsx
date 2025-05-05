import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import ProductDetails from './Component/Product/ProductDetails'
import ProductCategory from './Component/ProductCategory'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Everything from './pages/EveryThing/Everything'
import Men from './pages/Men/men'
import Women from './pages/Women/Women'
import Kid from './pages/Kid/Kid'
import Contact from './pages/Contact/Contact'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import ErrorPage from './Utility_Component/ErrorPage'
import Cart from './pages/Cart/Cart'
import AddProduct from './pages/AddProduct/AddProduct'
import CategoryPage from './Component/CategoryPage/CategoryPage'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/category/:categoryName" element={<ProductCategory/>} />
      <Route path="/everything" element={<Everything/>}/>
      <Route path="/everything/:productID" element={<ProductDetails/>}/>
      <Route path="/beauty" element={<CategoryPage/>}/>
      <Route path="/groceries" element={<CategoryPage/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      

      <Route path="*" element={<ErrorPage />} />

    </Routes>
    <Footer/>
      
    </BrowserRouter>
  )
}

export default App
