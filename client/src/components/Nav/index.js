import React, { useEffect, useState } from "react";
import "../../styles/NavStyle.css";
import { Link, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import {FaBars} from 'react-icons/fa';

function Nav() {
    const [expandNav, setExpandNav] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNav(false);
    }, [location]);

    return (
        <div className="navbar" id={expandNav ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {setExpandNav((prev) => !prev);
                }}>
                {/* <FontAwesomeIcon icon={faBars} /> */}
                <FaBars />
                </button>
            </div>
            <div className="links">
                <Link to="/HVP-React-Portfolio">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/contactme">Contact Me</Link>
                {/* <Link to="/contact">Contact Me</Link> */}
            </div>
        </div>
    )
}

export default Nav;