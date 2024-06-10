import React from "react";
import "./Works.css";
import im1 from "./../../assests/img1.avif"
import im2 from "./../../assests/img2.avif"
import im3 from "./../../assests/img3.avif"
import im4 from "./../../assests/img4.avif"
// import im5 from "./../../assests/img5.avif"
// import im6 from "./../../assests/img6.avif"

const Works = () => {
  return (
    
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
            {/* <img src={im5} alt="" className="wimg" /> */}
            {/* <img src={im6} alt="" className="wimg" /> */}

        </div>
        <button className="morebtn">See More</button>
      </section>
    
  );
};

export default Works;
