import React, { useEffect, useState } from 'react';
import './Homepage.css';
import axios from 'axios';
import CategoryFilter from '../../Components/CategoryFilter/CategoryFilter';
import Product from '../../Components/ProductCard/Product';

function Homepage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        console.log(`Error fetching products: ${err}`);
      }
    };

    fetchProducts();
  }, []);

  const handleCategorySelect = (category) => {
    if (category === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="homepage-container">
      <CategoryFilter onCategorySelect={handleCategorySelect} />
      <div className="product-cards">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
