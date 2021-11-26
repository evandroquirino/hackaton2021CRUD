import React from 'react';
import ProductsCard from './components/Products/Card/Card';

import './App.css';

const App = () => {
  const products = {
    "id": 1,
    "produto": "Calça jeans",
    "foto": "https://lojasgang.vteximg.com.br/arquivos/ids/276463/38030178-2.jpg?v=637388565944100000",
    "descricao": "Calca skiny, tamanho 38, coleção inverno 2021, azul escuro com detalhes na lavagem",
    "valor":"350,00",
    "categoria_id":"1",
    "empresa_id":"2",

  };


  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}
    >
      <ProductsCard products={products} />
    </div>
  );
}

export default App;