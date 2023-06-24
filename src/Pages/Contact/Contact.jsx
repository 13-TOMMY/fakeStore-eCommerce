import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-us'>
      <div className='contact-us-container'>
      <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact