import React from 'react';
import {Route, Switch} from "react-router-dom";
import NewCocktail from "./containers/NewCocktail";
import Login from "./containers/Login";
import Cocktails from "./containers/Cocktails";

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Cocktails} />
            <Route path="/cocktails" exact component={Cocktails} />
            <Route path="/login" exact component={Login} />
            <Route path="/cocktails/new" exact component={NewCocktail} />
        </Switch>
    );
};

export default Routes;