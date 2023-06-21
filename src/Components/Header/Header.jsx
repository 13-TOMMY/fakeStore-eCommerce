import React from 'react'
import './Header.css'
import {BsCart} from "react-icons/Bs";

function Header() {
  
  return (
    <div className='header-container'>
      <a href="/" className='logo'>Fake Store</a>
      <div className='cart'>
         <h6 className='amount'>!</h6>
         <BsCart className='reactIcons'/>
      </div>
    </div>
  )
}

export default Header