import React from 'react'
import Logo from '../../../assets/logo/Side_Logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='container mx-auto'>
      <div className="navbar bg-base-100">

        <div className="navbar-start">
          <div className="dropdown">
            <Link to={"/"}>
              <img src={Logo} alt="SphereWise Technology Logo" className='max-h-[55px]' />
            </Link>
          </div>
        </div>

        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/services"}>Services</Link></li>
            {/* <li>
        <details>
        <summary>Services</summary>
        <ul className="p-2 !mt-0">
        <li><a>Websites</a></li>
        <li><a>Apps</a></li>
        <li><a>Design</a></li>
        </ul>
        </details>
      </li> */}
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/contact"} className="btn btn-info"><i className="fa-solid fa-phone"></i> Contact Us </Link>
        </div>
      </div>
    </div>

  )
}

export default NavBar
