import React from 'react'
import './Product.css'
import {AiFillHeart} from "react-icons/Ai";

function Product({ product }) {
  const formattedPrice = parseFloat(product.price).toFixed(2);
  const formattedCategory = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  //title (string) manipulation
  const maxChar = 32;
  const words = product.title.split('');
  let title = words.slice(0, maxChar).join('');
  if(words.length > maxChar){
    title += '...';
  }
  return (
   <div className="product-card">
   <div className='img-container'>
   <AiFillHeart className='reactHeart'/>
   <img src={product.image} alt={product.title} className='product-img'/>
   </div>
   <div className='detail-container'>
   <a href={`/productDetails/${product?.id}`}>
   <h3 className='product-title'>{title}</h3>
   <p className='product-category'>{formattedCategory}</p>
   </a>
   <p className='product-price'>{formattedPrice}€</p>
   </div>
 </div>
  )
}

export default Product