import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="love-container">
      <p className="loveP">Made with ♥ by Tommy </p>
      </div>
      <div className="contact-us-container-footer">
         <a href="/contact" className='contact-us'>Contact US</a>
      </div>
    </div>
  )
}

export default Footer