import React from 'react'
import Hero from '../components/home-components/Hero'
import HowWeWork from '../components/home-components/HowWeWork'
import ChoosingUs from '../components/home-components/ChoosingUs'
import OurClients from '../components/home-components/OurClients'

export const Home = ({ isLight }) => {
  return (
    <>
      <Hero />

      <div className={`row z-10 ${isLight && 'bg-sky-400 py-10'}`}>
        <div className='container mx-auto relative'>
          {!isLight &&
            <>
              <div className="absolute top-0 md:-top-10 left-5  w-[300px] h-[300px] bg-gradient-to-t from-blue-500 via-purple-900 to-transparent rounded-full filter blur-[150px] z-0"></div>
              <div className="absolute top-72 sm:top-16 left-5 sm:left-[200px] md:left-[300px] lg:left-[700px] xl:left-[920px] 2xl:left-[1120px] mt-40 lg:mt-0 w-[300px] h-[300px]  sm:w-[400px] sm:h-[400px] bg-gradient-to-t from-blue-700 via-blue-950 to-transparent rounded-full filter blur-[120px] z-1"></div>
            </>
          }

          <h3 className="text-left text-4xl mb-5">What We Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <div className="card glass shadow-md">
              <div className="card-body">
                <h2 className="text-center text-3xl">Websites</h2>
                <p className="text-left mt-5">Our websites aren't merely virtual storefronts; they're strategic assets meticulously designed to attract, engage, and convert visitors into loyal customers. With a keen focus on user experience and responsive design, we ensure that your online presence reflects the essence of your brand while driving tangible results. Furthermore, our custom software solutions are tailored to address the unique challenges faced by small businesses. From automating processes to enhancing productivity, our software solutions are crafted to be the catalysts that fuel growth and scalability.
                </p>
              </div>
            </div>
            <div className="card glass shadow-md">
              <div className="card-body">
                <h2 className="text-center text-3xl">Custom Software</h2>
                <p className="text-left mt-5">At SphereWise Tech, we understand that the journey of a small business is dynamic and multifaceted. That's why our dedicated team collaborates closely with you, listening to your aspirations and challenges. By aligning our expertise with your vision, we forge solutions that not only meet your immediate needs but also lay the groundwork for sustainable success. Through our comprehensive suite of software solutions, we aim not just to meet expectations but to exceed them, empowering small businesses to thrive in a digitally-driven world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChoosingUs isLight={isLight}></ChoosingUs>

      <HowWeWork isLight={isLight}></HowWeWork>

      <div className='container mx-auto'>

        {/* <div className="row my-10">
        <h3 className="text-left text-4xl mt-5">Our Team</h3>
      </div> */}

        <OurClients isLight={isLight}></OurClients>

        <div className="row my-10">
          <h3 className="text-left text-4xl mt-5">Technologies</h3>
        </div>

        <div className="row my-10">
          <h3 className="text-left text-4xl mt-5">Reviews</h3>
        </div>

        <div className="row my-10">
          <h3 className="text-left text-4xl mt-5">Frequently Asked Questions</h3>
        </div>

      </div>
    </>
  )
}

export default Home
