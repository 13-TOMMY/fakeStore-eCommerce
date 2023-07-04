import React, { useContext } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/Bs';
import { CartContext } from '../../contexts/CartContext';

function Header() {
  const { cartCount } = useContext(CartContext);

  return (
    <div className='header-container'>
      <Link to='/' className='logo'>Fake Store</Link>
      <Link to='/checkout' className='cart'>
        <h6 className='amount'>{cartCount}</h6>
        <BsCart className='reactIcons' />
      </Link>
    </div>
  );
}

export default Header;
