import React from 'react'

const Products = ({ title, price, description, state }) => {
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
          <button className="bg-[#adadad] w-fit text-xs p-[10px] rounded-3xl text-[#fff]">
            Add to cart
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Products
