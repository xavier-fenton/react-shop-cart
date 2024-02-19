import React from 'react'

const Products = ({ state }) => {
  return (
    <div className="p-[10px] bg-white border rounded-lg m-[5px] flex flex-col gap-5">
      <div className="bg-[#b4b4b4] rounded w-fit px-[5px] text-sm text-[#fff5f5] flex flex-row gap-2">
        <div>title:</div>
        <div className="text-[#ffffff]">{state.title}</div>
      </div>
      <div className="bg-[#b4b4b4] rounded w-fit px-[5px] text-sm text-[#fff5f5] flex flex-row gap-2">
        <div>$10</div>
        <div className="text-[#ffffff]">{state.price}</div>
      </div>
      <button className="bg-[#adadad] w-fit text-xs p-[10px] rounded-3xl text-[#fff]">
        Add to cart
      </button>
    </div>
  )
}

export default Products
