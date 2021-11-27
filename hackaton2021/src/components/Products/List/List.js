import React from 'react';
import "./List.css";
import ProductsCard from '../Card/Card';
import useApi from '../../utils/useApi';

const ProductsList = ({ loading, error, products, refetch}) => {

    const[deleteProduct, deleteProductInfo ] = useApi({
        method: 'DELETE',
    });

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
            <ProductsCard 
                product={product} 
                onclickDelete={async () => {
                    await deleteProduct({
                        url: `/products/${product.id}`
                    });
                    refetch();
                }}
            />
        ))}
        {loading && <div>Carregando mais promoções...</div>}
        </div>
    )
}

export default ProductsList;