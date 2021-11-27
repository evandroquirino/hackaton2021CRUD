import React from "react";
import { Link } from "react-router-dom";
import { BiTrash } from 'react-icons/bi'
import './Card.css';


const ProductsCard = ({product, onclickDelete}) => (
    <div className="products-card">
        <img className="products-card__foto" alt={product.produto} src={product.foto} />
        <div className="products-card__info" >
            <h1 className="products-card__produto" >{product.produto}</h1>
            <span className="products-card__valor">R$ {product.valor}</span>
            <p className="products-card__descricao">{product.descricao}</p>
        </div>
        <div className=" teste"></div>
            <Link to={`/edit/${product.id}`}className="promotion-card__edit-button">Editar</Link>
            <button type="button" 
                className="promotion-card__delete-button"
                onClick={onclickDelete}
            >
                <BiTrash />
            </button>
    </div>
);

export default ProductsCard;