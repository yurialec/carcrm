import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { CircularProgress } from "@mui/material";
import Cadastro from "./pages/Cadastro";


const Rotas = () => {
    <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress /> </div>}>
    <Router>
        <Routes>
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/login" component={() => (<h1>Login</h1>)} />
        </Routes>
    </Router>
    </Suspense>
}

export default Rotas;