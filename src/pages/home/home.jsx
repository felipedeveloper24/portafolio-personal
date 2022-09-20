import React from "react";
import Header from "../../components/header/header.component";
import "./home.styles.css"; 
import Descripcion from "../../components/descripcion/descripcion.component";
import Educacion from "../../components/educacion/educacion.component";
import Experiencia from "../../components/experiencia/experiencia.component";
import Skills from "../../components/skills/skills.component";
const Home = ()=>{
  
    return(
        <div className="main-container">
           <Header/>
           <Descripcion/>
           <Skills/>
           <Educacion/>
           <Experiencia/>
   
        </div>
    );
}

export default Home;