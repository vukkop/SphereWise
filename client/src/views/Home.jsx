import React from 'react'

export const Home = () => {
  return (
    <div>

      <div className="card w-full  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-left text-4xl mt-5">Tailored Solutions for Every Business Size</h2>
          <p className="text-left mt-5">At SphereWise Tech, we champion the growth of businesses, regardless of size. Our bespoke website and software solutions aren't confined by scale; they're crafted to elevate small businesses to new heights. We believe that no endeavor is too modest. From startups to local enterprises, our commitment remains steadfast in delivering intuitive websites and custom software that catalyze growth. Our focus? Empowering every business, ensuring they harness the power of technology to expand their horizons and redefine success. Let's embark on this journey together—transforming small ventures into impactful enterprises, one innovative solution at a time.
          </p>
          <div className="card-actions justify-center mt-3 mb-3">
            <button className="btn btn-outline btn-info">Find Out More</button>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <h3 className="text-left text-4xl mt-5">What We Do</h3>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-center text-3xl mt-5">Websites</h2>
            <p className="text-left mt-5">Our websites aren't merely virtual storefronts; they're strategic assets meticulously designed to attract, engage, and convert visitors into loyal customers. With a keen focus on user experience and responsive design, we ensure that your online presence reflects the essence of your brand while driving tangible results. Furthermore, our custom software solutions are tailored to address the unique challenges faced by small businesses. From automating processes to enhancing productivity, our software solutions are crafted to be the catalysts that fuel growth and scalability.
            </p>
          </div>
          <div>
            <h2 className="text-center text-3xl mt-5">Custom Software</h2>
            <p className="text-left mt-5">At SphereWise Tech, we understand that the journey of a small business is dynamic and multifaceted. That's why our dedicated team collaborates closely with you, listening to your aspirations and challenges. By aligning our expertise with your vision, we forge solutions that not only meet your immediate needs but also lay the groundwork for sustainable success. Through our comprehensive suite of website and software solutions, we aim not just to meet expectations but to exceed them, empowering small businesses to thrive in a digitally-driven world.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <h3 className="text-left text-4xl mt-5">How We Work</h3>
      </div>
      <div className="row mt-3">
        <h3 className="text-left text-4xl mt-5">Choosing Us</h3>
      </div>
      <div className="row mt-3">
        <h3 className="text-left text-4xl mt-5">Our Team</h3>
      </div>
      <div className="row mt-3">
        <h3 className="text-left text-4xl mt-5">Our Clients</h3>
      </div>
      <div className="row mt-3">
        <h3 className="text-left text-4xl mt-5">Technologies</h3>
      </div>
      <div className="row mt-3">
        <h3 className="text-left text-4xl mt-5">Reviews</h3>
      </div>
      <div className="row mt-3">
        <h3 className="text-left text-4xl mt-5">Frequently Asked Questions</h3>
      </div>
    </div>
  )
}

export default Home
