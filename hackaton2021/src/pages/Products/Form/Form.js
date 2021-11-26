import React from "react";
import { useParams } from "react-router-dom";
import ProductsForm from "../../../components/Products/Form/Form";
import UIContainer from "../../../components/UI/Container/Container";


const PagesProductsForm = () => {
    const { id } = useParams();

    return(
        <UIContainer>
           <ProductsForm id={id ? Number.parseInt(id, 10) : null} />
        </UIContainer>
    );
}
   

export default PagesProductsForm;