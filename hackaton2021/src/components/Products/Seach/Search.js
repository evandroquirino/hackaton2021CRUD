import React, { useState, useEffect, useRef } from 'react';
import useApi from '../../utils/useApi';
import ProductsList from '../List/List';
import { Link } from 'react-router-dom';
import "./Search.css"

const ProductsSearch = () => {
    const mountRef = useRef(null);
    const [search, setSearch] = useState('');
    const [load, loadInfo] = useApi({
      debounceDelay: 300,
      url:'/products',
      method: 'get',
      params: {
        _order: 'desc',
        _sort: 'id',
        produto_like: search || undefined,
      },
    });

  useEffect(() => {
    
    load({
      debounced: mountRef.current,
    });

    if (!mountRef.current) {
      mountRef.current = true;
    }
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
        <ProductsList 
          products={loadInfo.data} 
          loading={loadInfo.loading} 
          error={loadInfo.error}  
        />
      </div>
  );

};

export default ProductsSearch;