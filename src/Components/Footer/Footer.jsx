import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="love-container">
      <p className="loveP">Made with ♥ by Tommy </p>
      </div>
      <div className="contact-us-container">
         <a href="/" className='contact-us'>Contact US</a>
      </div>
    </div>
  )
}

export default Footer