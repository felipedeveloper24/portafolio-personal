import React from "react";
import "./description.styles.css";
import logo  from "../../assets/perfil.jpg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
const Descripcion = ()=>{
    return (
        <div className="descripcion">
            <div className="box-imagen">
                <img src={logo} />
            </div>
            <div className="box-descripcion">
                <h2>Felipe Opazo Córdova</h2>
                <h3>Estudiante de Ingeniería de Ejecución en Computación e Informática, Universidad del Bio-Bio</h3>
                <p>
                    Actualmente me encuentro estudiando en mayor profundidad sobre tecnologías de frontend (React, Material UI, Bootstrap 4)
                   y de backend (NodeJS, MYSQL, Express, PrysmaDB), todo esto para llevar a cabo mi proyecto de titulación (Tesis).
                </p>
                <div className="box-redes">
                    <a href="https://google.cl"><img className="icon" src={linkedin} alt="hola" /></a>
                    <a href="https://google.cl"><img src={github} className="icon" alt="hola2" /></a>
                  
                </div>
            </div>
        </div>
    );
}

export default Descripcion;