import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);
  const form = useRef()

  const sendEmail = (e) => {
    setLoading(true)

    //Add better validation, and handle toastr behaviour in separate reusable function
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.phoneNumber.trim() || !contactForm.message.trim()) {
      setStatus(500)
      setLoading(false)
      setTimeout(() => {
        setStatus(0);
      }, 4000);
      return;
    }

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        setStatus(result.status)
        console.log(result, "Status is 200");
        setLoading(false)
        setTimeout(() => {
          setStatus(0);
        }, 4000);
      }, (error) => {
        setStatus(error.status)
        console.log(error);
        setLoading(false)
        setTimeout(() => {
          setStatus(0);
        }, 4000);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail(e)
    setContactForm({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    })
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setContactForm((prev) =>
      ({ ...prev, [name]: value }))
  }

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.091907793846!2d-123.12842622322509!3d49.27465567132224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d147892327%3A0xf6d93a12934903c!2s1310%20Richards%20St%2C%20Vancouver%2C%20BC%20V6B%203G6!5e0!3m2!1sen!2sca!4v1706570347480!5m2!1sen!2sca" width="500" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>


        <div className="divider lg:divider-horizontal">OR</div>


        <form className='grid flex-grow gap-4 ms-5' ref={form} onSubmit={handleSubmit} noValidate action="">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name:</span>
            </div>
            <input type="text" name='name' onChange={onChangeHandler} value={contactForm.name} placeholder="ex: John Smith" className="input input-bordered w-full max-w-xs" />
            {/* <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div> */}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input type="email" name='email' onChange={onChangeHandler} value={contactForm.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            {/* <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div> */}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone number:</span>
            </div>
            <input type="text" name='phoneNumber' onChange={onChangeHandler} value={contactForm.phoneNumber} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            {/* <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div> */}
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Message:</span>
            </div>
            <textarea name='message' onChange={onChangeHandler} value={contactForm.message} className="textarea textarea-bordered h-24 w-[80%] mb-4" placeholder="Message"></textarea>
            {/* <div className="label">
            <span className="label-text-alt">Your bio</span>
          </div> */}
          </label>
          <div>
            {loading ?
              <button disabled type='submit' className="btn btn-success float-start">
                <span className="loading loading-spinner"></span>
                Sending message
              </button>
              :
              <button type='submit' className="btn btn-success float-start">
                <span>
                  Send message
                </span>
              </button>
            }
          </div>
        </form >

        {status !== 0 &&
          <div className="toast toast-end">
            {status === 200 &&
              <div className="alert alert-success">
                <span><i className="fa-solid fa-circle-check text-xl"></i> Message sent successfully.</span>
              </div>
            }
            {status === 500 &&
              <div className="alert alert-error">
                <span><i className="fa-solid fa-triangle-exclamation text-xl"></i> Message was not sent.</span>
              </div>
            }
          </div>
        }
      </div >
    </div>
  )
}

export default Contact
