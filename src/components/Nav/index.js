import React from "react";
import "../../styles/NavStyle.css";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navbar">
            <div className="toggleButton">
                <button></button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/about-me">About Me</Link>
                <Link to="/contact">Contact Me</Link>
            </div>
        </div>
    )
}

export default Nav;