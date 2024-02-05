import React from 'react'
import ContactForm from '../components/contact-components/ContactForm';

const Contact = () => {


  return (
    <div className='container mx-auto'>
      <h2 className='text-4xl font-bold my-8'>Contact Us</h2>
      <div className='flex flex-col w-full lg:flex-row min-h-[65vh] my-6'>

        <div className='grid flex-grow text-center '>
          <div>
            <div className='mt-5 mb-7'>
              <h4 className="text-3xl mb-1">Email:</h4>
              <a href="mailto:spherewisetech@gmail.com" className="text-xl underline">Click here to email us</a>
            </div>
            <div className='mt-5 mb-7'>
              <h4 className="text-3xl mb-1">Phone:</h4>
              <a className="text-xl underline" href="tel:+">+1 234 456 4567</a>
            </div>
            <div className='mt-5 mb-7'>
              <h4 className="text-3xl mb-1">Address:</h4>
              <a className="text-xl underline" href='#'>1310 Richards Street, Vanvouver, BC, Canada</a>
            </div>
            <div className='mt-5 mb-7 flex justify-center'>
              {/* TO DO:
                Implement google maps API instead using iframe
              */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.091907793846!2d-123.12842622322509!3d49.27465567132224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d147892327%3A0xf6d93a12934903c!2s1310%20Richards%20St%2C%20Vancouver%2C%20BC%20V6B%203G6!5e0!3m2!1sen!2sca!4v1706570347480!5m2!1sen!2sca" width="80%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal">OR</div>

        <ContactForm />

      </div >
    </div>
  )
}

export default Contact
