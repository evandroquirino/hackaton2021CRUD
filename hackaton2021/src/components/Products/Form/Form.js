import React, {useEffect, useState} from 'react';
import "./Form.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import useApi from '../../utils/useApi';

const initialValue = {
    produto:'',
    foto:'',
    descricao:'',
    valor:0,
    categoria_id:'',
    empresa_id:''
}

const ProductsForm = ({ id }) => {
    const [values, setValues] = useState(id ? null : initialValue);
    const history = useHistory();
    const[load] = useApi({
        url: `/products/${id}`,
        method: 'get',
        onCompleted: (response) => {
            setValues(response.data);
        }
    });

    const [save, saveInfo] = useApi({
        url:id ? `/products/${id}`: '/products',
        method : id ? 'put' : 'post',
        data: values,
        onCompleted: (response) => {
            if(!response.error){
                history.push('/');
            }
        }
    })

    useEffect(() => {
        if (id) {
            load();
        }
    }, [id]);

    function onChange(ev){
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value});
    }

    function onSubmit(ev) {
        ev.preventDefault();
        save();
    }

    return (
        <div>
            <h1>Produtos</h1>
            <h2>Novos Produtos</h2>
            {!values
            ? (
                <div>Carregando...</div>
            ) : ( 
            <form onSubmit={onSubmit}>
                {saveInfo.loading && <span>Salvando dados</span>}
                <div className="products-form__group">
                    <label htmlFor="produto">Produto:</label>
                    <input id="produto" name="produto" type="text" onChange={onChange} value={values.produto}/>
                </div>
                <div className="products-form__group">
                    <label htmlFor="foto">Foto(Link):</label>
                    <input id="foto" name="foto" type="text" onChange={onChange} value={values.foto}/>
                </div>
                <div className="products-form__group">
                    <label htmlFor="descricao">Descricao:</label>
                    <input id="descricao" name="descricao" type="text" onChange={onChange} value={values.descricao}/>
                </div>
                <div className="products-form__group">
                    <label htmlFor="valor">Valor:</label>
                    <input id="valor" name="valor" type="text" onChange={onChange} value={values.valor}/>
                </div>
                <div className="products-form__group">
                    <label htmlFor="categoria_id">Categoria</label>
                    <select name="categoria_id" onChange={onChange} value={values.categoria_id}>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2" selected>Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                </div>
                <div className="products-form__group">
                    <label htmlFor="empresa_id">empresa</label>
                    <input id="empresa_id" name="empresa_id" type="text" onChange={onChange} value={values.empresa_id}/>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
            )}
        </div>
    )
};

export default ProductsForm;
