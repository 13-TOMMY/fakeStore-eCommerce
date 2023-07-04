import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Modal from 'react-modal';
import './Checkout.css';
import { BiTrash } from "react-icons/bi";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay:{
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  }
};

Modal.setAppElement(document.getElementById('root'));

function Checkout() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate()

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  const checkout = () => {
    setIsModalOpen(true);
  };

  const returnHome = () => {
    clearCart();
    navigate('/');
  };
  const renderTitle = (title) => {
    const maxChar = 32;
    return title.length <= maxChar ? title : title.substring(0, maxChar) + '...';
  };
  const renderPrice = price => { 
    return parseFloat(price).toFixed(2)
  };
  return (
    <div className='checkout-page'>
      <div className='checkout-container'>
        <div className='checkout-titles'>
          <div className='co-title-left'>
            <p>Item</p>
          </div>
          <div className='co-title-right'>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </div>
        </div>
          <ul className='checkout-item-container'>
            {cart.map((item, id) => (
              <li key={id} className='checkout-item'>
                <div className='co-item-left'>
                  <img src={item.image} alt={item.title} className='co-item-img co-item-l'/>
                  <h3 className='co-item-title co-item-l'>{renderTitle(item.title)}</h3>
                  </div>
                  <div className='co-item-right'>
                  <p className='co-item-price co-item-r'>{renderPrice(item.price)}€</p>
                  <p className='co-item-quantity co-item-r'>1</p>
                  <button onClick={() => removeFromCart(item.id)} className='co-item-remove co-item-r'><BiTrash /></button>
                  </div>
              </li>
            ))}
          </ul>
      </div>
      <div className='checkout-bottom'>
          <p className='co-total'>Total {totalAmount.toFixed(2)}€</p>
          <button onClick={checkout} className='checkout-button'>Checkout</button>
        <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={customStyles}>
          <div className='modal-div'>
          <p className='modal-title'>Your Order was successful!</p>
          <p className='modal-p'>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
          <button onClick={returnHome} className='modal-button'>Return to Main Page</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Checkout;
