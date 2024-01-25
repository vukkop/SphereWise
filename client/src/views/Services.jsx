import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Custom Website Development',
      description: 'We create stunning and responsive websites tailored to your brand and business goals.',
      img: ''
    },
    {
      title: 'Bespoke Software Solutions',
      description: 'Our custom software development ensures your unique business needs are met with precision and innovation.',
      img: ''
    },
    {
      title: 'E-commerce Solutions',
      description: 'Boost your online presence with our comprehensive e-commerce solutions, from setup to optimization.',
      img: ''
    },
    // Add more services as needed
  ];


  return (
    <div className='container mx-auto'>

      <div className="min-h-[80vh] p-8">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card card-compact bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
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
