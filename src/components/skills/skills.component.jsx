import React from "react";

import git from "../../assets/git.png";
import docker from "../../assets/docker.png";
import html from "../../assets/html-5.png";
import css from "../../assets/css.png";
import mysql from "../../assets/mysql.png";
import c from "../../assets/letter-c.png";
import java from "../../assets/java.png";
import php from "../../assets/php.png";
import riact from "../../assets/atom.png";
import node from "../../assets/node.png";
import "./skill.component.css";
import ConstructionIcon from '@mui/icons-material/Construction';
const Skills = ()=>{
    return(
        <div className="skills">   
            <h6>Tecnologías <ConstructionIcon/> </h6>
            <div className="box-skills">
                <img src={riact} alt="" />
                <img src={node} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={php} alt="" />
                <img src={mysql} alt="" />
                <img src={git} alt="" />
                <img src={java} alt="" />
                <img src={c} alt="" />
                <img src={docker} alt="" />
            </div>
            
        </div>
    );
};

export default Skills;