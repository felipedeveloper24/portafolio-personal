import React from "react";
import "./experiencia.styles.css";
import ScienceIcon from '@mui/icons-material/Science';
const Experiencia = ()=>{
    return(
        <div className="experiencia">
            <h2>Experiencia <ScienceIcon/></h2>
            <div>
                <h6>Práctica profesional 1</h6>
                <cite>Liceo Saltos del Laja (Abril - Agosto (2021))</cite>
               
                <ul>
                    <li>Crear página web institucional.</li>
                    <li>Soporte Técnico a distancia.</li>
                </ul>
                <cite></cite>
               
            </div>
        </div>
    );
};


export default Experiencia;