import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Cadastro } from "./Pages/Cadastro/Cadastro";

const Rotas = () => (
    <div>
        <Router>
            <Switch>
                <Route path="/login" component={() => (<h1>Login</h1>)} />
                <Route path="/Cadastro" component={() => (<h1>Cadastro</h1>)} />
            </Switch>
        </Router>
    </div>
);

export default Rotas;