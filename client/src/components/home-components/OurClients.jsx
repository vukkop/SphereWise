import React from 'react'
import MRLogo from '../../assets/ourCients/M&RSolutions.png'
import PPLogo from '../../assets/ourCients/PuppyPoodle.svg'
import LPLogo from '../../assets/ourCients/Ljuba_dark.png'
import GLogo from '../../assets/ourCients/GraminaLogo.png'

const OurClients = () => {
  return (
    <div className="row my-10">
      <h3 className="text-left text-4xl mt-5 mb-5">Our Clients</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 xl:gap-40 px-12 xl:px-10">
        <div>
          <img src={MRLogo} alt="M&R Solutions" />
          <h6 className='text-xl font-semibold mb-1'>M&R Solutions</h6>
        </div>
        <div className='flex flex-col justify-end'>
          <img src={GLogo} alt="Gramina" />
          <h6 className='text-xl font-semibold mb-1 mt-[30%]'>Gramina</h6>
        </div>
        <div className='flex flex-col justify-end'>
          <img src={LPLogo} alt="Ljuba Popovic" />
          <h6 className='text-xl font-semibold mb-1'>Ljuba Popovic Photography</h6>
        </div>
        <div>
          <img src={PPLogo} alt="Puppy Poodle" />
          <h6 className='text-xl font-semibold mb-1'>Puppy Poodle</h6>
        </div>
      </div>
    </div>
  )
}

export default OurClients
