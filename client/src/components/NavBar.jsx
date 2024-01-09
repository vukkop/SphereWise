import React from 'react'
import Logo from '../assets/logo/Side_Logo_full_dark_background.png'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <a href="#Home" >
            <img src={Logo} alt="SphereWise Technology Logo" className='max-h-[50px]' />
          </a>
        </div>

      </div>
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2 !mt-0">
                <li><a>Websites</a></li>
                <li><a>Apps</a></li>
                <li><a>Design</a></li>
              </ul>
            </details>
          </li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-active btn-info"><i className="fa-solid fa-phone"></i> Contact Us </a>
      </div>
    </div>
  )
}

export default NavBar
