import React from 'react'
import Idea from '../../assets/images/idea.jpg'

const Hero = () => {
  return (
    <div className='container mx-auto'>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className='relative h-[70vh] w-full rounded-br-2xl rounded-bl-2xl lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-none overflow-hidden border-none -mt-4'>
            <img src={Idea} className="absolute insert-0 h-full w-full object-cover filter grayscale contrast-200" />
            <div className='absolute insert-0 h-full w-full bg-gradient-to-b lg:bg-gradient-to-r from-base-100 to-transparent'></div>
          </div>
          <div className='w-[100%]'>
            <h1 className="text-left text-5xl lg:text-6xl font-bold leading-tight">Empower your business with SphereWise Tech</h1>
            <div className='flex items-top gap-6 mt-8 lg:mt-14'>
              <i class="fa-solid fa-right-long text-3xl mt-[5px]"></i>
              <h2 className="text-left text-3xl ">  Our tailored website and software solutions transcend size limitations, elevating startups and local enterprises to new heights.
              </h2>
            </div>
            <div className="justify-center mt-10">
              <button className="btn btn-outline btn-info">Find Out More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
