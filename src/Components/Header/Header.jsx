import React from 'react'
import './Header.css'
import { FaBeer } from "react-icons/fa";

function Header() {
  return (
    <div className='header-container'>
      <a href="/" className='logo'>Fake Store</a>
      <div className='cart'>
         <h6 className='amount'>!</h6>
         <FaBeer />
      </div>
    </div>
  )
}

export default Header