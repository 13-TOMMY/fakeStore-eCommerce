import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage'

function App() {

  return (
    <div className='body-container'>
    <Header />
    <Homepage />
    <Footer />
    </div>
  )
}

export default App
