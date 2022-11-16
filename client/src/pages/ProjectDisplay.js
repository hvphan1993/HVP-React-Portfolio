import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { FaGithub } from 'react-icons/fa';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];

    return (
        <div className="project">
            <h1> {project.name} </h1>
            <img src={project.image} alt="project" />
            <p>
                <b>Tools Used:</b> {project.skills}
            </p>
            <a href={project.link} target="_" >
                <FaGithub  />
                
            </a>
            <div className="summary">
                <b>Summary:</b> {project.summary} 
            </div>
            <a className="access" href={project.app} target="_" >
                <p>
                    Access App Here!
                </p>
            </a>
            
        </div>
    )
}

export default ProjectDisplay;