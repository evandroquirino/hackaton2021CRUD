import React, { useState, useEffect } from 'react';
import useApi from '../../utils/useApi';
import ProductsList from '../List/List';
import { Link, useParams } from 'react-router-dom';
import "./Search.css"

const ProductsSearch = () => {

    const [search, setSearch] = useState('');
    const [load, loadInfo] = useApi({
      url:'/products',
      method: 'get',
      params: {
        _order: 'desc',
        _sort: 'id',
        produto_like: search || undefined,
      },
    });

  useEffect(() => {
    load();
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