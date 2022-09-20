import React from "react";
import "./educacion.styles.css";
import SchoolIcon from '@mui/icons-material/School';
const Educacion = ()=>{
    return(
        <div className="educacion">
            <h1>Educación <SchoolIcon/></h1>

            <div className="info">
                <h6>Enseñanza Media</h6>
                <cite>Escuela F-1101 Saltos del Laja (Cabrero)</cite>
                <br />
                <cite>2004-2013</cite>
            </div>
            <div className="info">
                <h6>Enseñanza Media</h6>
                <cite>Instituto San Sebastián (Yumbel)</cite>
                <br />
                <cite>2014-2017</cite>
            </div>
            <div className="info">
                <h6>Ingeniería de Ejecución en Computación e Informática</h6>
                <cite>Universidad del Bio - Bio</cite>
                <br />
                <cite>2019 - Actualidad</cite>
            </div>

        </div>
    )
};

export default Educacion;