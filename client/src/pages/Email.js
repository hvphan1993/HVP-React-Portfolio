import React from "react";
// import { FaEnvelope } from "react-icons/fa";
import "../styles/Email.css";
// import { FaPhone } from "react-icons/fa";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Email() {
  return (
    <div>
      <div className="icon">
        <a href="mailto:hvphan1993@gmail.com" target="_">
          <div id="close" className="text">
            Email Me: hvphan1993@gmail.com
          </div>
          <FaEnvelope />
        </a>
      </div>
      <div a href="tel: " className="text">
        Leave a Message: (408) 355-5725
      </div>

      <div className="content-center">
        <a href="tel: 408-355-5725">
          <div className="pulse">
            <FaPhone />
          </div>
        </a>
      </div>

      <div className="text">
          Check out my LinkedIn Profile
        </div>
          <a href="https://www.linkedin.com/in/hien-phan-profile/" target="_">
          <div className="linkedicon">
          <FaLinkedin />
          </div>
        </a>
    </div>
  );
}

export default Email;
