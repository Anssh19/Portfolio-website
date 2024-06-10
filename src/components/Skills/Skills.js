import React from "react";
import "./Skills.css";
import css from "./../../assests/css.png";
import js from "./../../assests/js.png";
import react from "./../../assests/react.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="heading">What I Do</span>
      <span className="skpara">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, vel
        officiis! Iure libero similique, consectetur nulla eaque unde porro!
        Culpa corporis, eum neque repellat eligendi, tempora commodi unde
        architecto voluptatum dignissimos quibusdam nemo assumenda at
        consequatur, veniam totam. Obcaecati, doloribus!
      </span>
      <div className="skillbars">
        <div className="bars">
          <img src={css} width={100} alt="css" className="barsimg" />
          <div className="skillstext">
            <h2>CSS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              perferendis dolore .
            </p>
          </div>
        </div>

        <div className="bars">
          <img src={js} width={100} alt="js" className="barsimg" />
          <div className="skillstext">
            <h2>JAVASCRIPT</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              officia mollitia quia eius, ducimus doloremque harum ratione eum
              unde quae velit.
            </p>
          </div>
        </div>

        <div className="bars">
          <img src={react} width={100} alt="react" className="barsimg" />
          <div className="skillstext">
            <h2>REACT-JS</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              consequuntur veniam cupiditate maxime omnis soluta. Impedit
              excepturi autem accusamus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
