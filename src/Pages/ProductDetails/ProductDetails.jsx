import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css'

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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
      <button type="add" className='add-to-cart'>Add to Cart</button>
      </div>
      </div>
    </div>
  );
}

export default ProductDetails