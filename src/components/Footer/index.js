import React from "react";
import "../../styles/Footer.css";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {fabLinkedin } from '@fortawesome/fontawesome-svg-core';
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa';

function Footer() {
    return (
        < div className="footer">
            <div className="socialMedia"> 
                <a href="https://www.linkedin.com/in/hien-phan-profile/" target="_"> <FaLinkedin /></a>
                 <a href="mailto:hvphan1993@gmail.com" target="_"> <FaEnvelope /> </a>  
                 <a href="https://github.com/hvphan1993" target="_"> <FaGithub /> </a> 
            </div>
            <p> &copy; 2022 Hien Phan</p>
            </div>
    )
}

export default Footer;