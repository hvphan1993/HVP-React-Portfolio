import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles/Email.css";
import { FaPhone } from 'react-icons/fa';

function Email() {
  return (
    <div>
      
      <div className="icon">
        <a href="mailto:hvphan1993@gmail.com" target="_">
          <div id="close" className="text">Email Me: hvphan1993@gmail.com</div>
          <FaEnvelope />
        </a>
      </div>
            <div className="text">Leave a Message: (408) 355-5725</div>
      <div className="content-center">

        <div className="pulse">
          <FaPhone />
        </div>
      </div>
    </div>
  );
}

export default Email;
