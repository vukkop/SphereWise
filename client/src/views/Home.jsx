import React from 'react'
import Hero from '../components/home-components/Hero'
import HowWeWork from '../components/home-components/HowWeWork'
import MRLogo from '../assets/ourCients/M&RSolutions.png'
import PPLogo from '../assets/ourCients/PuppyPoodle.svg'
import LPLogo from '../assets/ourCients/Ljuba_dark.png'
import GLogo from '../assets/ourCients/GraminaLogo.png'

export const Home = () => {
  return (
    <>
      <Hero />
      <div className='container mx-auto relative'>
        <div className="absolute -top-10 left-20  w-[300px] h-[300px] bg-gradient-to-t from-blue-500 via-purple-900 to-transparent rounded-full filter blur-[150px] z-0"></div>
        <div className="absolute top-0 sm:left-[200px] md:left-[300px] lg:left-[700px] xl:left-[920px] 2xl:left-[1120px] mt-40 xl:mt-10  w-[400px] h-[400px] bg-gradient-to-t from-blue-700 via-blue-950 to-transparent rounded-full filter blur-[120px] z-1"></div>

        <div className="row my-10 z-10">
          <h3 className="text-left text-4xl mb-5">What We Do</h3>
          <div className="grid grid-cols-2 gap-8">
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

        <div className="row my-10 z-15">
          <h3 className="text-left text-4xl mt-5 mb-5">Choosing Us</h3>
          <div className="grid grid-cols-2 gap-16 text-left">
            <div>
              <div className='rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 via-blue-600 to-transparent '>
                <span className='font-bold text-xl'>1</span>
              </div>
              <h4 className='text-xl font-semibold mb-1'>Certified experts</h4>
              <p>Certified business and tech development experts who ensure a business-focused approach.</p>
            </div>
            <div>
              <div className='rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 via-blue-600 to-transparent '>
                <span className='font-bold text-xl'>2</span>
              </div>
              <h4 className='text-xl font-semibold mb-1'>Quick implementation</h4>
              <p>Velocity doubled by quality is what our Agile approach boils down to.</p>
            </div>
            <div>
              <div className='rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 via-blue-600 to-transparent '>
                <span className='font-bold text-xl'>3</span>
              </div>
              <h4 className='text-xl font-semibold mb-1'>Technology Agnostic</h4>
              <p>Providing a tech stack wide and expansive enough to erase any limits of flexibility during each and every project.</p>
            </div>
            <div>
              <div className='rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 via-blue-600 to-transparent '>
                <span className='font-bold text-xl'>4</span>
              </div>
              <h4 className='text-xl font-semibold mb-1'>Flexibility</h4>
              <p>We can integrate your product with any required platform so that it moves your business forward.</p>
            </div>
            <div>
              <div className='rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 via-blue-600 to-transparent '>
                <span className='font-bold text-xl'>5</span>
              </div>
              <h4 className='text-xl font-semibold mb-1'>Compliance</h4>
              <p>Regardless of the industry, we build software that does not react to, but prevents cyber security and legal issues.</p>
            </div>
            <div>
              <div className='rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 via-blue-600 to-transparent '>
                <span className='font-bold text-xl'>6</span>
              </div>
              <h4 className='text-xl font-semibold mb-1'>Adaptability</h4>
              <p>Avenga builds products with codes, adapting to the client's requirements, not vice versa.</p>
            </div>
          </div>
        </div>

      </div>

      <HowWeWork />

      <div className='container mx-auto'>

        {/* <div className="row my-10">
        <h3 className="text-left text-4xl mt-5">Our Team</h3>
      </div> */}

        <div className="row my-10">
          <h3 className="text-left text-4xl mt-5 mb-5">Our Clients</h3>
          <div className="grid grid-cols-4 gap-10 xl:gap-40 xl:px-10">
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
