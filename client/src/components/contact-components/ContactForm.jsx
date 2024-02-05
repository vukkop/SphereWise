import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";

const ContactForm = () => {
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
    <>
      <form className='grid flex-grow gap-4 ms-5 me-5' ref={form} onSubmit={handleSubmit} noValidate action="">
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
          <input type="text" name='phoneNumber' onChange={onChangeHandler} value={contactForm.phoneNumber} placeholder="Type here" className="input input-bordered " />
          {/* <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div> */}
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Message:</span>
          </div>
          <textarea name='message' onChange={onChangeHandler} value={contactForm.message} className="textarea textarea-bordered h-36 w-full max-w-md mb-4" placeholder="Message"></textarea>
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
    </>
  )
}

export default ContactForm
