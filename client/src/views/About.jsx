import React from 'react'

export const About = () => {
  return (

    <div className="container mx-auto min-h-[80vh] p-8">
      <h1 className="text-4xl font-bold">About Us</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-500">
            SphereWise Tech was founded with a vision to [briefly describe the founding principles and goals of your company]. Since our establishment, we have been dedicated to [briefly mention your core values or mission]. Through passion, innovation, and a commitment to excellence, we have evolved into a trusted partner for businesses seeking cutting-edge digital solutions.
          </p>
        </div>
        <img className='rounded-xl' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <img className='rounded-xl' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-500">
            At SphereWise Tech, our team comprises skilled professionals who bring diverse expertise to the table. From seasoned developers to creative designers, each team member plays a crucial role in shaping our success. Together, we work collaboratively to turn ideas into reality, ensuring that every project we undertake is met with precision, creativity, and a passion for innovation.
          </p>
        </div>
      </div>


      {/* You can add more sections as needed, such as company values, milestones, etc. */}
    </div>
  )
}

export default About
