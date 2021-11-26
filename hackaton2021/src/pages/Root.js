import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import PagesProductsSearch from "./Products/Search/Search";
import PagesPromotionForm from "./Products/Form/Form";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/create" component={PagesPromotionForm} />
                <Route path="/edit/:id" component={PagesPromotionForm} />
                <Route path="/" component={PagesProductsSearch} />
            </Switch>
        </Router>
    );
};

export default Root;