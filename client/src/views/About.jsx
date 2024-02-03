import React from 'react'
import StoryImg from '../assets/images/about/Story.jpg'
import TeamImg from '../assets/images/about/Team.jpg'

export const About = () => {
  return (

    <div className="container mx-auto  p-8">
      <h1 className="text-4xl font-bold">About Us</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className='flex flex-col justify-center'>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-500">
            SphereWise Tech was founded with a vision to empower businesses of all sizes through innovative and tailored website and software solutions. The company's core principles include inclusivity, client-centricity, and a commitment to excellence. Their goal is to champion the growth of businesses, regardless of size, by providing strategic assets in the form of websites and custom software. Through a focus on innovation, adaptability, and quality, SphereWise Tech aims to transform small ventures into impactful enterprises, one innovative solution at a time. Through passion, innovation, and a commitment to excellence, we have evolved into a trusted partner for businesses seeking cutting-edge digital solutions.
          </p>
        </div>
        <img className='rounded-xl' src={StoryImg} alt="Our Story" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <img className='rounded-xl' src={TeamImg} alt="Our Team" />
        <div className='flex flex-col justify-center'>
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
