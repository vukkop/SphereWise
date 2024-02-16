import React from 'react'

const ChoosingUs = ({ isLight }) => {
  return (
    <div className="row container mx-auto my-10 z-15">
      <h3 className="text-left text-4xl mt-5 mb-5">Choosing Us</h3>
      <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16 text-left px-2">
        <div>
          <div className={`rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 ${isLight ? 'via-sky-500' : 'via-blue-600'} to-transparent`}>
            <span className='font-bold text-xl'>1</span>
          </div>
          <h4 className='text-xl font-semibold mb-1'>Certified experts</h4>
          <p>Experts in business and tech development with certifications, dedicated to ensuring a business-centric approach.</p>
        </div>
        <div>
          <div className={`rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 ${isLight ? 'via-sky-500' : 'via-blue-600'} to-transparent`}>
            <span className='font-bold text-xl'>2</span>
          </div>
          <h4 className='text-xl font-semibold mb-1'>Quick implementation</h4>
          <p>Our Agile approach essentially means doubling velocity through the integration of quality.</p>
        </div>
        <div>
          <div className={`rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 ${isLight ? 'via-sky-500' : 'via-blue-600'} to-transparent`}>
            <span className='font-bold text-xl'>3</span>
          </div>
          <h4 className='text-xl font-semibold mb-1'>Technology Agnostic</h4>
          <p>Delivering an extensive tech stack that eliminates flexibility constraints in every project.</p>
        </div>
        <div>
          <div className={`rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 ${isLight ? 'via-sky-500' : 'via-blue-600'} to-transparent`}>
            <span className='font-bold text-xl'>4</span>
          </div>
          <h4 className='text-xl font-semibold mb-1'>Flexibility</h4>
          <p>Seamless integration of your product with any necessary platform, propelling your business forward.</p>
        </div>
        <div>
          <div className={`rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 ${isLight ? 'via-sky-500' : 'via-blue-600'} to-transparent`}>
            <span className='font-bold text-xl'>5</span>
          </div>
          <h4 className='text-xl font-semibold mb-1'>Compliance</h4>
          <p>Industry-agnostic, our software is designed not to react but to proactively prevent cybersecurity and legal issues.</p>
        </div>
        <div>
          <div className={`rounded-xl mb-1 px-4 py-2 w-fit bg-gradient-to-br from-sky-400 ${isLight ? 'via-sky-500' : 'via-blue-600'} to-transparent`}>
            <span className='font-bold text-xl'>6</span>
          </div>
          <h4 className='text-xl font-semibold mb-1'>Adaptability</h4>
          <p>At SphereWise Tech, we develop products with adaptable code that conforms to the client's requirements, not the other way around.</p>
        </div>
      </div>
    </div>
  )
}

export default ChoosingUs
