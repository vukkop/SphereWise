import React, { useState } from 'react'

const HowWeWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const adjustStepClasses = (index) => {
    setHoveredIndex(index);
    for (let i = 0; i <= index; i++) {
      document.getElementById(i.toString()).classList.add('bg-sky-800')
    }
  }

  const resetStepClasses = (index) => {
    for (let i = 0; i <= index; i++) {
      document.getElementById(i.toString()).classList.remove('bg-sky-800')
    }
    setHoveredIndex(null);
  };

  return (
    <div className="row bg-neutral my-10 p-8">
      <div className='container mx-auto'>
        <h3 className="text-left text-4xl ">How We Work</h3>
        <h5 className="text-left text-xl my-3 w-[50%]">We combine the industry's best service delivery standards with unprecedented solution personalization practices.</h5>

        <div className="w-full px-4 flex flex-wrap">
          <div className="w-1/5">
            <ul className="steps steps-vertical mt-4">
              {[0, 1, 2, 3].map((index) => (
                <li
                  key={index}
                  className={`step ${hoveredIndex >= index & hoveredIndex !== null ? 'step-info' : ''} ${index === 0 && 'my-[65px]'}`}
                ></li>
              ))}
            </ul>
          </div>

          <div className="w-4/5 mx-auto text-left">
            <div id='0' onMouseEnter={() => adjustStepClasses(0)} onMouseLeave={() => resetStepClasses(0)} className="md:max-w-xl lg:-ml-20 my-8 md:h-40 card bg-base-100 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-sky-700 hover:text-white duration-500">
              <div className="card-body">
                <h2 className="card-title">Write to us or book a meeting</h2>
                <p>We will respond within two hours and arrange a meeting with you at your earliest convenience.</p>
              </div>
            </div>

            <div id='1' onMouseEnter={() => adjustStepClasses(1)} onMouseLeave={() => resetStepClasses(1)} className="md:max-w-xl mb-8 md:h-40 card bg-base-100 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-sky-700 hover:text-white duration-500">
              <div className="card-body">
                <h2 className="card-title">Meet with our representative</h2>
                <p>An expert matching your market niche and industry will get in touch to discuss your requests and determine the next steps.</p>
              </div>
            </div>

            <div id='2' onMouseEnter={() => adjustStepClasses(2)} onMouseLeave={() => resetStepClasses(2)} className="md:max-w-xl lg:ml-20 mb-8 md:h-40 card bg-base-100 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-sky-700 hover:text-white duration-500">
              <div className="card-body">
                <h2 className="card-title">Receive an offer</h2>
                <p>You will get a service suite offering, including time and cost estimates, for each of your project's stages.</p>
              </div>
            </div>

            <div id='3' onMouseEnter={() => adjustStepClasses(3)} onMouseLeave={() => resetStepClasses(3)} className="md:max-w-xl lg:ml-40 md:h-40 card bg-base-100 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-sky-700 hover:text-white duration-500">
              <div className="card-body">
                <h2 className="card-title">Sign the offer</h2>
                <p>We start delivering the results while keeping you updated on the progress.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default HowWeWork
