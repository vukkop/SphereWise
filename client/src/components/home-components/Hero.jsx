import React from 'react'
import Idea from '../../assets/images/idea.jpg'

const Hero = () => {
  return (
    <div className='container mx-auto'>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className='relative h-[70vh] w-full rounded-br-2xl rounded-bl-2xl lg:rounded-tr-2xl lg:rounded-br-2xl overflow-hidden border-none -mt-7'>
            <img src={Idea} className="absolute insert-0 h-full w-full object-cover filter grayscale contrast-200" />
            <div className='absolute insert-0 h-full w-full bg-gradient-to-b lg:bg-gradient-to-r from-base-100  to-transparent'></div>
          </div>
          <div className='w-[70%]'>
            <h2 className="text-left text-4xl mt-5">Tailored Solutions for Every Business Size</h2>
            <p className="text-left mt-5">At SphereWise Tech, we champion the growth of businesses, regardless of size. Our bespoke website and software solutions aren't confined by scale; they're crafted to elevate small businesses to new heights. We believe that no endeavor is too modest. From startups to local enterprises, our commitment remains steadfast in delivering intuitive websites and custom software that catalyze growth. Our focus? Empowering every business, ensuring they harness the power of technology to expand their horizons and redefine success. Let's embark on this journey together—transforming small ventures into impactful enterprises, one innovative solution at a time.
            </p>
            <div className="justify-center mt-3 mb-3">
              <button className="btn btn-outline btn-info">Find Out More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
