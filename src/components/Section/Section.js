import React from "react";
import "./Section.css";
import Hire from "../../assests/hire.png";
import Person from "../../assests/person.png"
import { Link } from "react-scroll";

const Section = () => {
  return (
    <section className="main">
      <div className="leftmain">
        <span className="hello">Hello,</span>
        <span className="mainintro">
          {" "}
          I'm <span className="namemain"> Ansh </span>
          <br />
          Web-Devloper
        </span>
        <p className="paramain">
          {" "}
          I have experience in React and JavaScript. I have worked on a few
          projects and I am looking for a new job.<br/>I think I could be a good fit
          for your company because I have the necessary skills.
        </p>
        <Link>
          <button className="mainbtn">
            <img src={Hire} alt="" className="btnimg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={Person} alt="" className="rightmain" />
    </section>
  );
};

export default Section;
