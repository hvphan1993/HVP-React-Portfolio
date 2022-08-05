import React from 'react';
import Profile1 from "../../img/Profile1.JPG";

function About() {
  return (
    <section className='my-5'>
      <h1 id="about">About Me</h1>
      <img src={Profile1} className="my-2" style={{ width: "18%" }} alt="profile1" />
    </section>
  );
}

export default About;