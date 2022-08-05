import React from "react";
import "../../styles/Footer.css";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {fabLinkedin } from '@fortawesome/fontawesome-svg-core';
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa';

function Footer() {
    return (
        < div className="footer">
            <div className="socialMedia"> 
                <FaLinkedin /> <FaEnvelope /> <FaGithub /> 
            </div>
            <p> &copy; 2022 Hien Phan</p>
            </div>
    )
}

export default Footer;