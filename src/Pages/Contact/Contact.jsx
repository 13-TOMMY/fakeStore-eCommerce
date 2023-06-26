import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="contact-us">
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <form>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
            className={name ? 'input-with-content' : ''}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className={email ? 'input-with-content' : ''}
          />
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message here"
            value={message}
            onChange={handleMessageChange}
            className={message ? 'input-with-content' : ''}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
