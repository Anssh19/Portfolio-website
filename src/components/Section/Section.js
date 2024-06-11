import React from "react";
import "./Section.css";
import Hire from "../../assests/hire.png";
import Person from "../../assests/person.png";
import call from "../../assests/call.png";
import { Link } from "react-scroll";

const Section = () => {
  const phoneNumber = '+123456789';

  return (
    <section className="main">
      <div className="leftmain">
        <span className="hello">Hello,</span>
        <span className="mainintro">
          I'm <span className="namemain"> Ansh </span>
          <br />
          Web-Developer
        </span>
        <p className="paramain">
          I have experience in React and JavaScript. I have worked on a few
          projects and I am looking for a new job.
          <br />
          I think I could be a good fit for your company because I have the necessary skills.
        </p>
        <Link>
          <button
            className="mainbtn"
            onClick={() => {
              window.location.href =
                'mailto:anshpatel8161@gmail.com?subject=You are Hired&body=Congratulations! I am interested in hiring you. Your employment and start date are dependent on the successful completion of all necessary hiring paperwork, which is the next step in the hiring process. Once you have accepted the position, the Student Employment Office will contact you regarding your hiring paperwork.';
            }}
          >
            <img src={Hire} alt="" className="btnimg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={Person} alt="" className="rightmain" />
      <div className="contact">
        <a href={`tel:${phoneNumber}`}>
          <button className="call">
            <img src={call} alt="Call Ansh" className="calls" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Section;
