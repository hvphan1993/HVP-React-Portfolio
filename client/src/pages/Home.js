import React from "react";
import "../styles/Home.css";
import Profile1 from "../assets/Profile1.JPG";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      {/* <h1 className="about">About Me</h1> */}
      <div className="about">
        <h2> Hi, my name is Hien</h2>
        <img
          src={Profile1}
          className="pic my-2"
          style={{ width: "18%" }}
          alt="profile1"
        />
        <div className="prompt">
          <p>
            Graduate of the UC Berkeley Coding Boot Camp Certificate Program. Lifelong learner who enjoys the opportunity to
            grow. Experienced with leading large groups and collaborating with colleagues to meet goals. Connect at hvphan1993@gmail.com!
          </p>
          {/* <a href="https://www.linkedin.com/in/hien-phan-profile/" target="_">
            <FaLinkedin />
          </a>
          <a href="mailto:hvphan1993@gmail.com" target="_">
            <FaEnvelope />
          </a>
          <a href="https://github.com/hvphan1993" target="_">
            <FaGithub />
          </a> */}
          
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, BootStrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB,
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
