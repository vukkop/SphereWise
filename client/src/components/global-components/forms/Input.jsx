import React from 'react'
import { useFormContext } from "react-hook-form"
import { findInputError } from '../../../utils/findInputError'
import { isFormInvalid } from '../../../utils/isFormInvalid'


const Input = ({ label, type, id, name, validation, placeholder }) => {
  const { register, formState: { errors }, } = useFormContext()

  const inputError = findInputError(errors, label)
  const isInvalid = isFormInvalid(inputError)


  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text capitalize">{label}:</span>
      </div>
      <input id={id} type={type} name={name} placeholder={placeholder} {...register(name, validation)} className="input input-bordered w-full max-w-xs" />
      <div className="label">
        {isInvalid &&
          <span className="label-text-alt text-error">{inputError.error.message}</span>
        }
      </div>
    </label>
  )
}



export default Input
