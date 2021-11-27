import React, { useState, useEffect, useRef } from 'react';
import useApi from '../../utils/useApi';
import ProductsList from '../List/List';
import UIInfinitScroll from '../../UI/InfinitScroll/InfinitScroll';
import { Link } from 'react-router-dom';
import "./Search.css"

const baseParams = {
  _order: 'desc',
  _sort: 'id',
  _limit: 4,
}

const ProductsSearch = () => {
  const[page, setPage] = useState(1);
  const mountRef = useRef(null);
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    debounceDelay: 300,
    url:'/products',
    method: 'get',
  });

  useEffect(() => {
    
    load({
      debounced: mountRef.current,
      params: {
        ...baseParams,
        _page: 1,
        produto_like: search || undefined,
      },
    });

    if (!mountRef.current) {
      mountRef.current = true;
    }
  }, [search]);

  function fetchMore() {
    const newPage = page + 1;
    load({
      isFetchMore: true,
      params: {
        ...baseParams,
        _page: newPage,
        produto_like: search || undefined,
      },
      updateRequestInfo: (newRequestInfo, prevRequestInfo) => ({
        data: [
          ...prevRequestInfo.data,
          ...newRequestInfo.data,
        ],
      })
    });
    setPage(newPage);
  }

  return (
      <div className="products-search">
        <header className="products-search__header">
          <h1>Meus produtos</h1>
          <Link to="/create" className="link">Novo produto</Link>
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
          refetch={() => {
            load({
              params: baseParams,
            });
          }}
        />
        {loadInfo.data && 
        !loadInfo.loading && 
        loadInfo.data?.length < loadInfo.total && (
          <UIInfinitScroll fetchMore={fetchMore} />
        )}
      </div>
  );

};

export default ProductsSearch;