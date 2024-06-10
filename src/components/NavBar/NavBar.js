import React from 'react'
import './NavBar.css'
import Logo from '../../assests/logo.png'
import btn from '../../assests/contactus.png'
import {Link} from 'react-scroll'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="logo" className='logo'/>
     <div className="menu">
      <Link className='menulist'> Home </Link>
      <Link className='menulist'> About </Link>
      <Link className='menulist'> Portfolio </Link>
      <Link className='menulist'> Resume </Link>

     </div>
     <button className="menubtn">
        <img src={btn} alt="" className='menubtnimg'/>
        Contact Me
     </button>
    </div>
  )
}

export default NavBar
