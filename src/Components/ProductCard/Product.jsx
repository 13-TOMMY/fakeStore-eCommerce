import React, { useContext, useState } from 'react';
import './Product.css';
import { AiFillHeart } from 'react-icons/ai';
import { CartContext } from '../../contexts/CartContext';

function Product({ product }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(() =>
    cart.some((item) => item.id === product.id)
  );

  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  const formattedPrice = parseFloat(product.price).toFixed(2);
  const formattedCategory = product.category.charAt(0).toUpperCase() + product.category.slice(1);

  const renderTitle = (title) => {
    const maxChar = 32;
    return title.length <= maxChar ? title : title.substring(0, maxChar) + '...';
  };

  return (
    <div className="product-card">
      <div className="img-container">
        {isInCart ? (
          <AiFillHeart className="heart-icon-blue" onClick={handleAddToCart} />
        ) : (
          <AiFillHeart className="heart-icon" onClick={handleAddToCart} />
        )}
        <img src={product.image} alt={product.title} className="product-img" />
      </div>
      <div className="detail-container">
        <a href={`/productDetails/${product?.id}`}>
          <h3 className="product-title">{renderTitle(product.title)}</h3>
          <p className="product-category">{formattedCategory}</p>
        </a>
        <p className="product-price">{formattedPrice}€</p>
      </div>
    </div>
  );
}

export default Product;
