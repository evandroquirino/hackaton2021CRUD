import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from '../Card/Card';

const ProductsSearch = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
      <div>
        {products.map((product) => (
            <ProductsCard product={product} />
        ))}
      </div>
  );

};

export default ProductsSearch;