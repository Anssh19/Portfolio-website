import React, { useState } from "react";
import "./Works.css";
import im1 from "./../../assests/img1.avif";
import im2 from "./../../assests/img2.avif";
import im3 from "./../../assests/img3.avif";
import im4 from "./../../assests/img4.avif";
import Modal from "./Modals/Modals";

const Works = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="work">
        <span className="wheading">My Portfolio</span>
        <span className="workpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          adipisci eius tempora voluptates ipsa repudiandae maiores esse a
          asperiores? Ipsum quaerat molestiae nostrum exercitationem! Provident
          consequatur dicta ipsam quas, maxime perferendis tempore? Ea doloribus
          repellat molestiae possimus eum harum fuga.
        </span>
        <div className="workimg">
          <img src={im1} alt="" className="wimg" />
          <img src={im2} alt="" className="wimg" />
          <img src={im3} alt="" className="wimg" />
          <img src={im4} alt="" className="wimg" />
        </div>
        <div style={{ position: "relative" }}>
          <button className="morebtn" onClick={() => setShow(true)}>
            See More
          </button>
        </div>
      </section>
      <Modal show={show} onClose={() => setShow(false)} /> 
    </>
  );
};

export default Works;
