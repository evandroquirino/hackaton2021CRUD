import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsSearch from '../../../components/Products/Seach/Search';

const PagesProductSearch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}
    >
        <ProductsSearch />
    </div>
  );
};

export default PagesProductSearch;