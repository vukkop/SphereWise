import React from 'react'
import ContactForm from '../components/contact-components/ContactForm';
import GoogleMap from '../components/contact-components/GoogleMap';

const Contact = () => {
  const contactInfo = {
    email: 'info@spherewise.ca',
    phone: '+1 778 512 6117',
    address: '1310 Richards Street, Vanvouver, BC, Canada',
  }


  return (
    <div className='container mx-auto'>
      <h2 className='text-4xl font-bold my-8'>Contact Us</h2>
      <div className='flex flex-col w-full lg:flex-row min-h-[65vh] my-6'>
        <div className='grid flex-grow text-center '>
          <div>
            <div className='mt-5 mb-7'>
              <h4 className="text-3xl mb-1">Email:</h4>
              <a href={`mailto:${contactInfo.email}`} className="text-xl underline">{contactInfo.email}</a>
            </div>
            <div className='mt-5 mb-7'>
              <h4 className="text-3xl mb-1">Phone:</h4>
              <a className="text-xl underline" href="tel:+17785126117">{contactInfo.phone}</a>
            </div>
            <div className='mt-5 mb-7'>
              <h4 className="text-3xl mb-1">Address:</h4>
              <p className="text-xl underline" >{contactInfo.address}</p>
            </div>
            <GoogleMap />

          </div>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <ContactForm />
      </div >
    </div>
  )
}

export default Contact
