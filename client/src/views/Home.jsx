import React from 'react'
import Idea from '../assets/images/idea.jpg'
import MRLogo from '../assets/ourCients/M&RSolutions.png'
import PPLogo from '../assets/ourCients/PuppyPoodle.svg'

export const Home = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={Idea} className="max-w-sm rounded-lg shadow-2xl filter grayscale contrast-200 bg-gradient-to-r from-inherit to-transparent" />
            <div>
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

        <div className="row my-10">
          <h3 className="text-left text-4xl mt-5 mb-5">Choosing Us</h3>
          <div className="grid grid-cols-2 gap-16 text-left">
            <div>
              <h4 className='text-xl font-semibold mb-1'>Certified experts</h4>
              <p>Certified business and tech development experts who ensure a business-focused approach.</p>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-1'>Quick implementation</h4>
              <p>Velocity doubled by quality is what our Agile approach boils down to.</p>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-1'>Technology Agnostic</h4>
              <p>Providing a tech stack wide and expansive enough to erase any limits of flexibility during each and every project.</p>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-1'>Flexibility</h4>
              <p>We can integrate your product with any required platform so that it moves your business forward.</p>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-1'>Compliance</h4>
              <p>Regardless of the industry, we build software that does not react to, but prevents cyber security and legal issues.</p>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-1'>Adaptability</h4>
              <p>Avenga builds products with codes, adapting to the client's requirements, not vice versa.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="row bg-neutral my-10 p-8">
        <div className='container mx-auto'>
          <h3 className="text-left text-4xl ">How We Work</h3>
          <h5 className="text-left text-xl my-3 w-[50%]">We combine the industry's best service delivery standards with unprecedented solution personalization practices.</h5>
          <div className="grid grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Write to us or book a meeting</h2>
                <p>We will respond within two hours and arrange a meeting with you at your earliest convenience.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Meet with our representative</h2>
                <p>An expert matching your market niche and industry will get in touch to discuss your requests and determine the next steps.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Receive an offer</h2>
                <p>You will get a service suite offering, including time and cost estimates, for each of your project's stages.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Sign the offer</h2>
                <p>We start delivering the results while keeping you updated on the progress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto'>

        {/* <div className="row my-10">
        <h3 className="text-left text-4xl mt-5">Our Team</h3>
      </div> */}

        <div className="row my-10">
          <h3 className="text-left text-4xl mt-5 mb-5">Our Clients</h3>
          <div className="grid grid-cols-5 gap-8">
            <div>
              <img src={MRLogo} alt="M&R Solutions" />
              <h6 className='text-xl font-semibold mb-1'>M&R Solutions</h6>
            </div>
            <div>
              <img src={PPLogo} alt="Puppy Poodle" />
              <h6 className='text-xl font-semibold mb-1'>Puppy Poodle</h6>
            </div>
            <div>
              <img src={PPLogo} alt="Gramina US" />
              <h6 className='text-xl font-semibold mb-1'>Gramina US</h6>
            </div>
            <div>
              <img src={PPLogo} alt="Gramina RS" />
              <h6 className='text-xl font-semibold mb-1'>Gramina RS</h6>
            </div>
            <div>
              <img src={PPLogo} alt="Ljuba Popovic" />
              <h6 className='text-xl font-semibold mb-1'>Ljuba Popovic Photography</h6>
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
