import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Contacto from "../pages/contacto";
const RouterApp = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contacto" element={<Contacto/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;

