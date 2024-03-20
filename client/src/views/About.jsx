import React, { useState } from 'react'
import StoryImg from '../assets/images/about/Story.JPEG2000'
import TeamImg from '../assets/images/about/Team.JPEG2000'

export const About = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    // setTimeout(() => {
    // }, 2000);
    setLoading(false);
  };
  return (

    <div className="container mx-auto  p-8">
      <h1 className="text-4xl font-bold">About Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
        <h2 className="text-3xl font-bold mb-4">On a Mission to Make Technology in Sync with User Needs and Aspirations</h2>
        <div>
          <h2 className="text-3xl font-bold mb-4">Values</h2>
          <ul className="text-xl text-left pl-32">
            <li><i class="fa-solid fa-circle-check text-info"></i> Trustworthy</li>
            <li><i class="fa-solid fa-circle-check text-info"></i> Reliable</li>
            <li><i class="fa-solid fa-circle-check text-info"></i> Compassionate</li>
            <li><i class="fa-solid fa-circle-check text-info"></i> People-first</li>
            <li><i class="fa-solid fa-circle-check text-info"></i> Productive</li>
          </ul>
        </div>
        <h2 className="text-3xl font-bold mb-4">Shaping a Future Where Technology Simplifies Every Aspect of Life</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className='flex flex-col justify-center lg:text-right'>
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="text-gray-500 xl:pl-10">
            SphereWise Tech was founded with a vision to empower businesses of all sizes through innovative and tailored website and software solutions. The company's core principles include inclusivity, client-centricity, and a commitment to excellence. Their goal is to champion the growth of businesses, regardless of size, by providing strategic assets in the form of websites and custom software. Through a focus on innovation, adaptability, and quality, SphereWise Tech aims to transform small ventures into impactful enterprises, one innovative solution at a time. Through passion, innovation, and a commitment to excellence, we have evolved into a trusted partner for businesses seeking cutting-edge digital solutions.
          </p>
        </div>
        {loading && <div className='h-[274px] sm:h-[432px] md:h-[528px] lg:h-[348px] xl:h-[444px] 2xl:h-[540px]'></div>}
        <img src={StoryImg} alt="Our Story" on onLoad={handleImageLoaded} className={`rounded-xl ${loading ? 'hidden' : 'animate-[slideLeft_500ms_ease-in-out]'}`} />
      </div>

      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 mb-8">
        {loading && <div className='h-[274px] sm:h-[432px] md:h-[528px] lg:h-[348px] xl:h-[444px] 2xl:h-[540px]'></div>}
        <img src={TeamImg} alt="Our Team" onLoad={handleImageLoaded} className={`rounded-xl ${loading ? 'hidden' : 'animate-[slideRight_500ms_ease-in-out]'}`} />
        <div className='flex flex-col justify-center lg:text-left'>
          <h3 className="text-2xl font-bold mb-4">Our Team</h3>
          <p className="text-gray-500 xl:pr-10">
            At SphereWise Tech, our team comprises skilled professionals who bring diverse expertise to the table. From seasoned developers to creative designers, each team member plays a crucial role in shaping our success. Together, we work collaboratively to turn ideas into reality, ensuring that every project we undertake is met with precision, creativity, and a passion for innovation.
          </p>
        </div>
      </div>

      {/* You can add more sections as needed, such as company values, milestones, etc. */}
    </div>
  )
}

export default About
