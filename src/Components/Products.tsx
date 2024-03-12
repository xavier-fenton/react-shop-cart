import React, { useContext } from 'react'
import { productContext } from '../shopContext'

type Props = {
  title: string,
  price: number,
  description: string,
  state: string,
  inventory: number,
}


const Products = ({ title, price, description, state, inventory }:Props) => {
  const context = useContext(productContext)
  const item = { title, price, description, state, inventory }
  
  const handleClick = (items: object) => {    
    context.setCartItems(items)
  }

  return (
    <div>
      {state === 'Created' ? (
        <div className="p-[10px] bg-white border rounded-lg m-[5px] flex flex-col gap-5">
          <div className="bg-[#b4b4b4] rounded w-fit px-[5px] text-sm text-[#fff5f5] flex flex-row gap-2">
            <div className="text-[#ffffff]">{title}</div>
          </div>

          <div className="bg-[#b4b4b4] rounded w-fit px-[5px] text-sm text-[#fff5f5] flex flex-row gap-2">
            <div className="text-[#ffffff]">{description}</div>
          </div>
          <div className="bg-[#b4b4b4] rounded w-fit px-[5px] text-sm text-[#fff5f5] flex flex-row gap-2">
            <div className="text-[#ffffff]">${price}</div>
          </div>
          <button
            className="bg-[#adadad] w-fit text-[10px] p-[10px] rounded-3xl text-[#fff]"
            onClick={(e) => {
              e.preventDefault()
              console.log('clicked')
              handleClick(item)
            }}
          >
            Add to cart
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Products
