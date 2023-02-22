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
            <div>
                <h6>Práctica profesional 2</h6>
                <cite>Intra LTDA (Septiembre - Diciembre (2022))</cite>
               
                <ul>
                    <li>Desarrollo de prototipo de aplicación para citar trabajadores vía Whatsapp</li>
                    <li>Frontend: Se utilizó React Js con Material UI y Bootstrap 5</li>
                    <li>Backend: Se contruyó una API Rest con Laravel 9 y MYSQL</li>
                    <li>API Whatsapp Meta: Se utilizó para el envío de mensajes a través de Whatsapp</li>
                </ul>
                <cite></cite>
               
            </div>
        </div>
    );
};


export default Experiencia;