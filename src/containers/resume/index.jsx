import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { data } from "./utils";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsFillInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__experience__header-text">Education</h3>
        </div>
      </div>
    </section>
  );
};

export default Resume;
