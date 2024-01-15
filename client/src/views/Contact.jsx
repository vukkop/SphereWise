import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState("");
  const form = useRef()

  const sendEmail = (e) => {
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        setStatus("200")
        console.log(result.text, "Status is 200");
        // Add toastr confirmation
        setTimeout(() => {
          setStatus("");
        }, 4000);
      }, (error) => {
        setStatus("500")
        console.log(error.text);
        setTimeout(() => {
          setStatus("");
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
      <h2 className='text-5xl mt-5 mb-7'>Contact Us</h2>
      <div className='flex flex-col w-full lg:flex-row min-h-[65vh]'>
        <div className='grid flex-grow text-center '>

          <div>
            <div className='mt-5 mb-7'>
              <h4 className="text-3xl mb-1">Email:</h4>
              <a href="mailto:#" className="text-xl underline">Click here to email us</a>
            </div>
            <div className='mt-5 mb-7'>
              <h4 className="text-3xl mb-1">Phone:</h4>
              <a className="text-xl underline" href="tel:+">+1 234 456 4567</a>
            </div>
            <div className='mt-5 mb-7'>
              <h4 className="text-3xl mb-1">Address:</h4>
              <a className="text-xl underline" href='#'>1310 Richards Street, Vanvouver, BC, Canada</a>
            </div>
          </div>

        </div>



        <div className="divider lg:divider-horizontal">OR</div>


        <form className='grid flex-grow ms-5' ref={form} onSubmit={handleSubmit} noValidate action="">
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
            <button type='submit' className="btn btn-success float-start">Send message</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
