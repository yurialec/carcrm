import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Cadastro } from "./Pages/Cadastro/Cadastro";

const Rotas = () => (
    <div>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress check /> </div>}>
        <Router>
            <Switch>
                <Route path="/login" component={() => (<h1>Login</h1>)} />
                <Route path="/Cadastro" component={() => (<h1>Cadastro</h1>)} />
            </Switch>
        </Router>
        </Suspense>
    </div>
);

export default Rotas;