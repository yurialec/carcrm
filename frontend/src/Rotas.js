import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CircularProgress } from "@mui/material";

const Rotas = () => {
    <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress /> </div>}>
    <Router>
        <Routes>
            <Route path="/cadastro" component={() => (<h1>Cadastro</h1>)} />
            <Route path="/login" component={() => (<h1>Login</h1>)} />
        </Routes>
    </Router>
    </Suspense>
}

export default Rotas;