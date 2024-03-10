import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import Input from '../global-components/forms/Input';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { emailValidation, messageValidation, nameValidation, phoneValidation } from '../../utils/forms/inputValidations';

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);
  const form = useRef()

  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

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
      phone: '',
      message: '',
    })
    // Perform your form submission logic here
    console.log("Form submitted successfully!");
  }

  return (
    <>
      <FormProvider {...methods}>
        <form className='grid flex-grow gap-4 ms-5 me-5' onSubmit={e => e.preventDefault()} noValidate>
          <Input {...nameValidation} />
          <Input {...emailValidation} />
          <Input {...phoneValidation} />
          <Input {...messageValidation} />

          <div>
            {loading ?
              <button disabled className="btn btn-success float-start">
                <span className="loading loading-spinner"></span>
                Sending message
              </button>
              :
              <button onClick={onSubmit} className="btn btn-success float-start">
                <span>
                  Send message
                </span>
              </button>
            }
          </div>
        </form >
      </FormProvider>

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
