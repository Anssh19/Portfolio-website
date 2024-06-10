import React from 'react'
import "./Contact.css"
import linkedin from "./../../assests/linkedin.png"
import github from "./../../assests/github.webp"
import insta from "./../../assests/insta.jpg"
import x from "./../../assests/x.png"
const Contact = () => {

  return (
    <div id='contactme'>
      <h1 className="contacthead">
        Contact Me
      </h1>
      <span className="contactdes">Please fill out form below to discuss any work opportunities.</span>
      <form action="" className="contactfrom">
        <input type="text" className="name" placeholder='Your Name'/>
        <input type="text" className="mail" placeholder='Your E-Mail'/>
        <textarea  rows={5} className='msg' placeholder='Your Message' ></textarea>
      </form>
      <button className="submit" type='submit' value='send'>Submit</button>
      <div  className="links">
        <img src={linkedin} width={50} alt="link" className="link" />
        <img src={github} width={50} alt="github" className="link" />
        <img src={insta} width={50} alt="insta" className="link" />
        <img src={x} width={50} alt="x" className="link" />
        
        
      </div>
    </div>
   
  )
}

export default Contact
