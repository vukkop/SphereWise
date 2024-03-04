import React from 'react'
import { useParams } from 'react-router-dom';
import { services } from './ServicesData';

const SingleService = () => {
  const { slug } = useParams();



  const service = services.find(s => s.slug === slug);

  return (
    <div>
      <h1>{service.heading}</h1>

    </div>
  )
}

export default SingleService
