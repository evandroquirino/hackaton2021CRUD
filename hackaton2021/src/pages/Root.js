import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import PagesProductsSearch from "./Products/Search/Search";
import PagesProductsForm from "./Products/Form/Form";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/create" component={PagesProductsForm} />
                <Route path="/edit/:id" component={PagesProductsForm} />
                <Route path="/" component={PagesProductsSearch} />
            </Switch>
        </Router>
    );
};

export default Root;