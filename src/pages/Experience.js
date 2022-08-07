import React from "react";
import { VerticalTimeLine, VerticalTimeLineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeLine lineColor="#4464AD">
                <VerticalTimeLineElement></VerticalTimeLineElement>
            </VerticalTimeLine>
        </div>
    );
}

export default Experience;