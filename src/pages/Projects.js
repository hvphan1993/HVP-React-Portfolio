import React from "react";
import ProjectItem from "../components/ProjectItem";
import budgetTracker from '../assets/budget-tracker.png';
import crystalJumper from "../assets/crystalJumper.png";
import whatsMyJam from "../assets/whatsmyjam.png";
import noteTaker from "../assets/note-taker.png";
import wethaWizard from "../assets/wethaWizard.png";
import personalPortfolio from "../assets/personalPortfolio.png";
import { ProjectList } from "../helpers/ProjectList"; 

import "../styles/Projects.css";

function Projects() {
    return (
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
            {ProjectList.map((project) => {
                return <ProjectItem name={project.name} image={project.image} />
            })}
            </div>
        </div>
    )
}

export default Projects;
