import React, {useState} from 'react';
import "./Form.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialValue = {
    produto:'',
    foto:'',
    descricao:'',
    valor:0,
    categoria_id:'',
    empresa_id:''
}

const ProductsForm = () => {
    const [values, setValues] = useState({initialValue});
    const history = useHistory();

    function onChange(ev){
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value});
    }

    function onSubmit(ev) {
        ev.preventDefault();

        axios.post('http://localhost:5000/products', values)
            .then((response) => {
                history.push('/');
            });
    }

    return (
        <div>
            <h1>Produtos</h1>
            <h2>Novos Produtos</h2>

            <form onSubmit={onSubmit}>
                <div className="products-form__group">
                    <label htmlFor="produto">Produto:</label>
                    <input id="produto" name="produto" type="text" onChange={onChange}/>
                </div>
                <div className="products-form__group">
                    <label htmlFor="foto">Foto:</label>
                    <input id="foto" name="foto" type="text" onChange={onChange}/>
                </div>
                <div className="products-form__group">
                    <label htmlFor="descricao">Descricao:</label>
                    <input id="descricao" name="descricao" type="text" onChange={onChange}/>
                </div>
                <div className="products-form__group">
                    <label htmlFor="valor">Valor:</label>
                    <input id="valor" name="valor" type="text" onChange={onChange}/>
                </div>
                <div className="products-form__group">
                    <label htmlFor="categoria_id">Categoria</label>
                    <select name="categoria-id" onChange={onChange}>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2" selected>Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                </div>
                <div className="products-form__group">
                    <label htmlFor="empresa_id">empresa</label>
                    <input id="empresa_id" name="empresa_id" type="text" onChange={onChange}/>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>

        </div>
    )
};

export default ProductsForm;
