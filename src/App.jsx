import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Checkout from './Pages/Checkout/Checkout'
import Contact from './Pages/Contact/Contact'


function App() {

  return (
    <BrowserRouter>
    <div className='body-container'>
    <Header />
    <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/productDetails/product?' element={<ProductDetails />} />
    <Route path='/checkout' element={<Checkout />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
