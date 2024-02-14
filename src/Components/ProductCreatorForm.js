import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="product"
        className="border border-[#b9b9b9] p-2"
        {...register('productName', { required: true, maxLength: 20 })}
      />
      <div className="flex flex-row gap-2 items-center">
        <div>Price:</div>
        <input
          className="border border-[#b9b9b9] rounded-md w-full p-2"
          type="number"
          {...register('price', { required: true, min: 1 })}
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div>Inventory:</div>
        <input
          className="border border-[#b9b9b9] rounded-md p-2 w-full"
          type="number"
          {...register('inventory', { min: 1, max: 99 })}
        />
      </div>

      <textarea
        type="message"
        placeholder="description"
        className="border border-[#b9b9b9] rounded-md p-2"
        {...register('description', {
          pattern: /^[A-Za-z]+$/i,
          maxLength: 250,
        })}
      />
      <input className="hover:cursor-pointer" type="submit" />
    </form>
  )
}

export default Form
