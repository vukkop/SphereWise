import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { services } from './ServicesData';

const SingleService = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  return (
    <div className='container mx-auto min-h-[70vh]'>
      <h1 className="text-4xl font-bold my-8">{service.heading}</h1>

      <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
      <p className="mb-6">{service.description}</p>

      <h3 className="text-xl font-bold mb-2">Our Expertise</h3>
      <ul className='mb-6'>
        {service.expertisePoints.map((e, index) => (
          <li key={index}><strong>{e.point}</strong> {e.details}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mb-2">Why Choose Us</h3>
      <ul className='mb-6'>
        {service.chooseUsPoints.map((e, index) => (
          <li key={index}><strong>{e.point}</strong> {e.details}</li>
        ))}
      </ul>

      <p className='my-12'><Link to={"/contact"} className='text-sky-600 font-semibold hover:underline hover:text-sky-500'>Contact us</Link> for a personalized consultation.</p>

      <Link to={"/services"} className="btn btn-outline">All Services</Link>
    </div>
  )
}

export default SingleService
