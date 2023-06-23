import React from 'react'
import './Product.css'
import {BsCart} from "react-icons/Bs";

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
   <BsCart className='reactHeart'/>
   <img src={product.image} alt={product.title} className='product-img'/>
   </div>
   <div className='detail-container'>
    <div>
   <h3 className='product-title'>{title}</h3>
   <p className='product-category'>{formattedCategory}</p>
   </div>
   <p className='product-price'>{formattedPrice}€</p>
   </div>
 </div>
  )
}

export default Product