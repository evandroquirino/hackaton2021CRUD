import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from '../Card/Card';
import { Link } from 'react-router-dom';
import "./Search.css"

const ProductsSearch = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');


  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
      <div className="products-search">
        <header className="products-search__header">
          <h1>Produtos</h1>
          <Link to="/create">Novo produto</Link>
        </header>
        <input 
          type="search" 
          className="products-search__input" 
          placeholder="Buscar" 
          value={search}
          onChange={(ev) => setSearch(ev.target.value)} 
        />
        {products.map((product) => (
            <ProductsCard product={product} />
        ))}
      </div>
  );

};

export default ProductsSearch;