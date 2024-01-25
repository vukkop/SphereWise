import React from 'react'
import Logo from '../../../assets/logo/Side_Logo_full_dark_background.png'

const Footer = () => {
  return (
    <>
      <footer className="footer p-8 bg-base-200 text-base-content">
        <aside>
          <img src={Logo} width='100%' />
          <p >SphereWise Tech<br />1310 Richards Street, Vanvouver, BC, Canada</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Websites</a>
          <a className="link link-hover">Apps</a>
          <a className="link link-hover">Custom Software</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Overview</a>
          <a className="link link-hover">Our Story</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <div className="bg-base-300 py-3">
        <h6 className='text-center'>© 2024 SphereWise Tech. All rights reserved.</h6>
      </div>
    </>
  )
}

export default Footer
