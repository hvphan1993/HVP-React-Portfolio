import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaBriefcase, FaUserGraduate, FaEllipsisH } from "react-icons/fa";
// import "../styles/Experience"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#4464AD">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011-2016"
          iconStyle={{background: "#4464AD", color: "#fff" }}
          icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
                San Jose State University, San Jose, CA
            </h3>
            <p>Bachelor's Degree in Kinesiology</p>
            <p>Summa Cum Laude GPA 3.86</p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2018"
          iconStyle={{background: "#4464AD", color: "#fff" }}
          icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
                San Jose State University, San Jose, CA
            </h3>
            <p>Single Subject Teaching Credential</p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{background: "#4464AD", color: "#fff" }}
          icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
            San Mateo District Accelerated Induction Program, San Mateo, CA
            </h3>
            <p>Cleared Teaching Credential</p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-Present"
          iconStyle={{background: "#880D1E", color: "#fff" }}
          icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
            Rhythm & Moves Physical Educator
            </h3>
            <p>Castro/Mistral Elementary, Mountain View, CA, 2016-2017</p>
			<p>Anderson/Easterbrook Elementary, San Jose, CA, 2017-2018 </p>
			<p>Bubb/Monta Loma Elementary, Mountain View, CA, 2018-2019</p>
            <p>Country Lane/Castlemont Elementary, San Jose/Campbell, CA 2019-2020</p>
            <p>Jose Antonio Vargas Elementary, Mountain View, CA 2020-Present</p>
            <FaEllipsisH /> <FaEllipsisH /> <FaEllipsisH /> <FaEllipsisH /> <FaEllipsisH /> <FaEllipsisH /> <FaEllipsisH />
            <p>Teach students Kindergarten through 5th grade using TGFU method </p>
            <p>Utilize lesson plans designed to promote student learning and activity under the National and California Standards </p>
            <p>Collaborate with peer teachers to improve and design daily lessons</p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{background: "#7CAE7A", color: "#fff" }}
          icon={<FaUserGraduate />}
          >
            <h3 className="vertical-timeline-element-title">
            UC Berkeley Virtual Software Engineering Boot Camp, CA
            </h3>
            <p>Completed 6-month bootcamp</p>
            <p>Learned full stack development skills</p>
        
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;