import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';
import { CartContext } from '../../contexts/CartContext';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(() =>
    cart.some((item) => item.id === product.id)
  );

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (err) {
        console.log(`Error fetching product details: ${err}`);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const formattedPrice = parseFloat(product.price).toFixed(2);

  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  return (
    <div className="product-details">
      <div className="product-details-container">
        <div className="product-details-picture">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details-information">
          <h2>{product.title}</h2>
          <p>{formattedPrice}€</p>
          <p>Description</p>
          <p>{product.description}</p>
          <button type="button" className="add-to-cart" onClick={handleAddToCart}>
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
