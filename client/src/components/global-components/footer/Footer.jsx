import React, { useEffect } from 'react'
import Logo from '../../../assets/logo/Side_Logo_full_dark_background.JPEG2000'
import { Link } from 'react-router-dom'

const Footer = ({ isLight }) => {

  useEffect(() => {
  }, [isLight]);

  return (
    <>
      <footer className={`footer px-8 pt-8 pb-2 bg-base-200 text-base-content ${isLight && 'bg-slate-800 text-slate-300'}`}>
        <aside className='hidden md:inline-flex'>
          <img src={Logo} alt='SphereWise Technology Logo' width='100%' />
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to={"/services"} className="link link-hover">Websites</Link>
          <Link to={"/services"} className="link link-hover">Apps</Link>
          <Link to={"/services"} className="link link-hover">Custom Software</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to={"/about"} className="link link-hover">About us</Link>
          <Link to={"/contact"} className="link link-hover">Contact</Link>
          <Link to={"/about"} className="link link-hover">Our Story</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <aside className='md:hidden place-self-center'>
          <img src={Logo} alt='SphereWise Technology Logo' width='100%' />
        </aside>
      </footer>
      <footer className={`footer flex justify-between items-center px-8 py-2 bg-base-200 ${isLight && 'bg-slate-800 text-slate-300'}`} style={{ rowGap: "0.5rem" }}>
        <aside className="items-center">
          <p >SphereWise Tech<br />1310 Richards Street, Vanvouver, BC, Canada</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 items-center">
            {/* YouTube */}
            <Link to={"https://www.youtube.com/@SphereWise"} target="_blank" rel="noopener noreferrer" className='pointer highlight'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>

            {/* X */}
            <Link to={"https://twitter.com/SphereWiseTech"} target="_blank" rel="noopener noreferrer" className='pointer highlight'>
              <i className="fa-brands fa-x-twitter text-2xl"></i>
            </Link>

            {/* FaceBook */}
            {/* <a target="_blank" rel="noopener noreferrer" className='pointer highlight'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a> */}
          </div>
        </nav>
      </footer>
      <div className={`bg-base-300 py-3 ${isLight && 'bg-slate-900'}`}>
        <p className='text-center text-white'>© 2024 SphereWise Tech. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
