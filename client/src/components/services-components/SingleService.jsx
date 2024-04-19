import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { services } from './ServicesData';
import ImageWithLoading from '../global-components/images/ImageWithLoading';

const SingleService = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  return (
    <div className='container mx-auto min-h-[70vh]'>
      <h1 className="text-4xl font-bold my-8">{service.heading}</h1>

      <div className="lg:max-w-[80%] text-left pl-2 my-10">
        <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
        <p className="mb-6">{service.description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ImageWithLoading src={service.img} alt={slug} classes="rounded-3xl object-cover px-2 h-full" />

        <div className='flex flex-col text-left pl-2 lg:pl-10'>
          <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
          <hr className="opacity-20 border-2" />
          <ul className='mb-10'>
            {service.expertisePoints.map((e, index) => (
              <li key={index} className='my-4'><strong>{e.point}</strong> {e.details}</li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
          <hr className="opacity-20 border-2" />
          <ul className='mb-4'>
            {service.chooseUsPoints.map((e, index) => (
              <li key={index} className='my-4'><strong>{e.point}</strong> {e.details}</li>
            ))}
          </ul>
          <Link to={"/services"} className="btn btn-outline self-center">All Services</Link>
        </div>
      </div>

      <p className='my-8'><Link to={"/contact"} className='text-sky-600 font-semibold hover:underline hover:text-sky-500'>Contact us</Link> for a personalized consultation.</p>

    </div>
  )
}

export default SingleService
