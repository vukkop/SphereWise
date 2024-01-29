import React from 'react'
import WebImg from '../assets/images/services/Web.jpg'
import AppImg from '../assets/images/services/Apps.jpg'
import SoftwareImg from '../assets/images/services/Software.jpg'
import EComImg from '../assets/images/services/E-Com.jpg'

const Services = () => {
  const services = [
    {
      title: 'Custom Website Development',
      description: 'We create stunning and responsive websites tailored to your brand and business goals.',
      img: WebImg
    },
    {
      title: 'Custom App Development',
      description: 'We design user-friendly applications to enhance your productivity.',
      img: AppImg
    },
    {
      title: 'Bespoke Software Solutions',
      description: 'Our custom software development ensures your unique business needs are met with precision and innovation.',
      img: SoftwareImg
    },
    {
      title: 'E-commerce Solutions',
      description: 'Boost your online presence with our comprehensive e-commerce solutions, from setup to optimization.',
      img: EComImg
    },
    // Add more services as needed
  ];


  return (
    <div className='container mx-auto'>

      <div className="min-h-[80vh] p-8">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card card-compact bg-base-100 shadow-xl">
              <figure className='overflow-hidden max-h-[250px]'><img src={service.img} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services
