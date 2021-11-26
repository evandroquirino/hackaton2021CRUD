import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsSearch from '../../../components/Products/Seach/Search';
import UIContainer from '../../../components/UI/Container/Container';

const PagesProductSearch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
      <UIContainer>
        <ProductsSearch />
      </UIContainer>
  );
};

export default PagesProductSearch;