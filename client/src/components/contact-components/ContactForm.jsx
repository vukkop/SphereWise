import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import Input from '../global-components/forms/Input';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
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

    const newErrors = {};
    Object.keys(contactForm).forEach((fieldName) => {
      const value = contactForm[fieldName];
      const error = validateInput(fieldName, value);
      if (error) {
        newErrors[fieldName] = error;
      }
    });

    // Update the errors state with validation results
    setErrors(newErrors);

    // If there are no errors, proceed with form submission logic
    if (Object.keys(newErrors).length === 0) {
      sendEmail(e)
      setContactForm({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      })
      // Perform your form submission logic here
      console.log("Form submitted successfully!");
    }


  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setContactForm((prev) =>
      ({ ...prev, [name]: value }))

    const updatedErrors = { ...errors, [name]: validateInput(name, value) };
    setErrors(updatedErrors);
    console.log(errors);
  }

  const validateInput = (fieldName, value) => {
    // Implement your validation rules and return an error message if invalid
    if (fieldName === "email" && value.length < 3) {
      return "Please provide valid email.";
    }
    // Add more validation rules as needed
    return ""; // No error
  };

  return (
    <>
      <FormProvider {...methods}>

        <form className='grid flex-grow gap-4 ms-5 me-5' onSubmit={e => e.preventDefault()} noValidate>
          <Input label="name" type="text" id="name" name="name" placeholder="ex: John Smith" validation={{
            required: {
              value: true,
              message: 'This field is required.',
            },
          }} />
          <label className="form-control w-full max-w-xs error">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input type="email" name='email' onChange={onChangeHandler} value={contactForm.email} placeholder="ex: example@email.com" className="input input-bordered w-full max-w-xs" />
            {errors.email && <div className="label">
              <span className="label-text-alt text-error">{errors.email}</span>
            </div>}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone number:</span>
            </div>
            <input type="text" name='phoneNumber' onChange={onChangeHandler} value={contactForm.phoneNumber} placeholder="ex: +1 123 123 1234" className="input input-bordered " />
            {/* <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div> */}
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Message:</span>
            </div>
            <textarea name='message' onChange={onChangeHandler} value={contactForm.message} className="textarea textarea-bordered h-36 w-full max-w-md mb-4" placeholder="Please write your message here"></textarea>
            {/* <div className="label">
            <span className="label-text-alt">Your bio</span>
          </div> */}
          </label>
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
