import React from 'react';
import "./List.css";
import ProductsCard from '../Card/Card';

const ProductsList = ({ loading, error, products}) => {
    if(error) {
        return <div>Ocorreu um erro inesperado</div>;
    }
    if(products === null) {
        return <div>Carregando...</div>;
    }
    if(products.length === 0) {
        return <div>Nenhum resultado encontrado</div>;
    }

    return(
        <div className="products-list">
            {products.map((product) => (
            <ProductsCard product={product} />
        ))}
        {loading && <div>Carregando mais promoções...</div>}
        </div>
    )
}

export default ProductsList;