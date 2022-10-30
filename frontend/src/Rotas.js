import React, { Suspense, Lazy } from "react";
import { CircularProgress } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Rotas = () => (
    <div>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress check /> </div>}>
        <Router>
            <Switch>
                <Route exact path="/" component={() => (<h1>Home</h1>)} />
            </Switch>
        </Router>
        </Suspense>
    </div>
);

export default Rotas;