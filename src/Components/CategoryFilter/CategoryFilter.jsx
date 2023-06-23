import React, { useState, useEffect } from 'react';
import './CategoryFilter.css';
import axios from 'axios';

function CategoryFilter({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'https://fakestoreapi.com/products/categories'
        );
        setCategories(response.data);
      } catch (err) {
        console.log(`Error fetching categories: ${err}`);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className='button-container'>
      <button onClick={() => onCategorySelect('')}>All</button>
      {categories.map((category) => (
        <button key={category} onClick={() => onCategorySelect(category)}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;