import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import Input from '../global-components/forms/Input';
import { useForm, FormProvider } from "react-hook-form"
import { emailValidation, messageValidation, nameValidation, phoneValidation } from '../../utils/forms/inputValidations';

const ContactForm = () => {
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);
  const form = useRef()
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    setLoading(true)
    sendEmail()
  })

  const sendEmail = () => {
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        setStatus(result.status)
        methods.reset()
        setLoading(false)
        setTimeout(() => {
          setStatus(0);
        }, 5000);
      }, (error) => {
        setStatus(error.status)
        console.log(error);
        setLoading(false)
        setTimeout(() => {
          setStatus(0);
        }, 5000);
      });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className='grid flex-grow gap-4 ms-5 me-5' ref={form} onSubmit={e => e.preventDefault()} noValidate>
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
