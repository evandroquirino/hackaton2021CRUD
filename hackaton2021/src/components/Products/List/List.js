import React from 'react';
import "./List.css";
import ProductsCard from '../Card/Card';

const ProductsList = ({ loading, products}) => {
    if(loading) {
        return <div>Carregando...</div>;
    }

    return(
        <div className="products-list">
            {products.map((product) => (
            <ProductsCard product={product} />
        ))}
        </div>
    )
}

export default ProductsList;