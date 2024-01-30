import React from 'react'
import Idea from '../../assets/images/idea.jpg'

const Hero = () => {
  return (
    <div className='container mx-auto'>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='relative h-[70vh] w-full rounded-tr-2xl rounded-br-2xl overflow-hidden border-none'>
            <img src={Idea} className="absolute insert-0 h-full w-full object-cover filter grayscale contrast-200 " />
            <div className='absolute insert-0 h-full w-full bg-gradient-to-r from-base-100 to-transparent'></div>
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

      <div className="row my-10">
        <h3 className="text-left text-4xl mb-5">What We Do</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="card bg-neutral shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-3xl">Websites</h2>
              <p className="text-left mt-5">Our websites aren't merely virtual storefronts; they're strategic assets meticulously designed to attract, engage, and convert visitors into loyal customers. With a keen focus on user experience and responsive design, we ensure that your online presence reflects the essence of your brand while driving tangible results. Furthermore, our custom software solutions are tailored to address the unique challenges faced by small businesses. From automating processes to enhancing productivity, our software solutions are crafted to be the catalysts that fuel growth and scalability.
              </p>
            </div>
          </div>
          <div className="card  bg-neutral shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-3xl">Custom Software</h2>
              <p className="text-left mt-5">At SphereWise Tech, we understand that the journey of a small business is dynamic and multifaceted. That's why our dedicated team collaborates closely with you, listening to your aspirations and challenges. By aligning our expertise with your vision, we forge solutions that not only meet your immediate needs but also lay the groundwork for sustainable success. Through our comprehensive suite of software solutions, we aim not just to meet expectations but to exceed them, empowering small businesses to thrive in a digitally-driven world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
