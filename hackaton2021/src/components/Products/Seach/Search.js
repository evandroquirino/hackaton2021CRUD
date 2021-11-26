import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from '../Card/Card';
import ProductsList from '../List/List';
import { Link, useParams } from 'react-router-dom';
import "./Search.css"

const ProductsSearch = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');


  useEffect(() => {
    const params = {};
    if (search) {
      params.produto_like = search;
    }
    axios.get('http://localhost:5000/products', { params })
      .then((response) => {
        setProducts(response.data);
      });
  }, [search]);

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
        <ProductsList products={products} loading={!products.length} />
      </div>
  );

};

export default ProductsSearch;