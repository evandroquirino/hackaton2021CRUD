import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

const ProductsCard = ({product}) => (
    <div className="products-card">
        <img className="products-card__foto" src={product.foto} />
        <div className="products-card__info" >
            <h1 className="products-card__produto" >{product.produto}</h1>
            <span className="products-card__valor">R$ {product.valor}</span>
            <p className="products-card__descricao">{product.descricao}</p>
        </div>
        <Link to={`/edit/${product.id}`}>Editar</Link>
    </div>
);

export default ProductsCard;