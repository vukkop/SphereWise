import React from 'react'

const Footer = () => {
  return (
    <div className='bg-base-300 mt-5 pt-3'>
      <div className="grid grid-cols-3 gap-8 container mx-auto mb-3">

        <div>
          <h5 className='text-xl mb-4'>Services</h5>
          <ul>
            <li className='mb-2'>Websites</li>
            <li className='mb-2'>Apps</li>
            <li className='mb-2'>Custom Software</li>
          </ul>
        </div>
        <div>
          <h5 className='text-xl mb-4'>About</h5>
          <ul>
            <li className='mb-2'>Overview</li>
            <li className='mb-2'>Team</li>
            <li className='mb-2'>Our Story</li>
          </ul>
        </div>
        <div>
          <h5 className='text-xl mb-4'>SphereWise Tech</h5>
          <ul>
            <li className='mb-2'>1310 Richards Street, Vanvouver, BC, Canada</li>

          </ul>
        </div>

      </div>
      <div className="bg-base-200 py-3">
        <h6 className='text-center'>© 2024 SphereWise Tech. All rights reserved.</h6>
      </div>
    </div>
  )
}

export default Footer
