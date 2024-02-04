import React from 'react'
import Logo from '../../../assets/logo/Side_Logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='container mx-auto'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">


          <Link to={"/"}>
            <img src={Logo} alt="SphereWise Technology Logo" className='max-h-[55px]' />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/services"}>Services</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/contact"} className="btn btn-info btn-sm md:btn-md mr-3 lg:mr-0"><i className="fa-solid fa-phone"></i> Contact Us </Link>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content items-end mt-1 right-0 z-[1] p-3 gap-2 shadow bg-base-100 rounded-box ">
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/services"}>Services</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div >

  )
}

export default NavBar
