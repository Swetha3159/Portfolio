import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
const personalDetails = [
  {
    label: "Name",
    value: "Swetha Reddy",
  },
  {
    label: "Age",
    value: "27",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "swethareddy3159@gmail.com",
  },
  {
    label: "Phone No",
    value: "9618014925",
  },
];

const jobSummary =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi error esse? Sint neque odit fugiat quasi esse. Obcaecati suscipit vitae maxime asperiores iusto consequuntur sequi libero explicabo consectetur ab harum quod quo id, magnam commodi fuga. Officia possimus optio reiciendis laboriosam similique, repellat cupiditate, accusantium iusto velit consequatur in minus at. Repudiandae cum recusandae fuga at fugit nesciunt voluptate, ipsam quaerat, incidunt natus exercitationem consectetur! Dolor officiis veniam nesciunt inventore mollitia dolorem ipsum ipsam ad fugiat expedita";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsFillInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3> FrontEnd Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => {
                return (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
