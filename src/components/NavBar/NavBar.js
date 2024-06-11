import React from 'react'
import './NavBar.css'
import Logo from '../../assests/logo.png'
import btn from '../../assests/contactus.png'
import {Link} from 'react-scroll'
import resume from '../../assests/resume.pdf'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="logo" className='logo'/>
     <div className="menu">
      <Link activeClass='active' to='main' spy={true} smooth={true} offset={-100} duration={500} className='menulist'> Home </Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='menulist'> About </Link>
      <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className='menulist'> Portfolio </Link>
      <a href={resume} target="_blank" rel="noopener noreferrer" className='menulist'>Resume</a>

     </div>
     <button className="menubtn" onClick={()=>{
       document.getElementById('contactme').scrollIntoView({behavior:'smooth'});
     }}>
        <img src={btn} alt="" className='menubtnimg'/>
        Contact Me
     </button>
    </div>
  )
}

export default NavBar
