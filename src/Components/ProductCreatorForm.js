import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ products }) => {
  const { register, handleSubmit } = useForm()
  return (
    <form className="flex flex-col gap-2">
      <input
        placeholder="product"
        className="border border-[#b9b9b9] p-2"
        {...register('productName', { required: true, maxLength: 20 })}
        defaultValue={products[0].title ? products[0].title : null}
      />
      <div className="flex flex-row gap-2 items-center">
        <div>Price:</div>
        <input
          className="border border-[#b9b9b9] rounded-md w-full p-2"
          type="number"
          {...register('price', { required: true, min: 1 })}
          defaultValue={products[0].price ? products[0].price : null}
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div>Inventory:</div>
        <input
          className="border border-[#b9b9b9] rounded-md p-2 w-full"
          type="number"
          {...register('inventory', { min: 1, max: 99 })}
          defaultValue={products[0].inventory ? products[0].inventory : null}
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
        defaultValue={products[0].description ? products[0].description : null}
      />
      <input className="hover:cursor-pointer" type="submit" />
    </form>
  )
}

export default Form
