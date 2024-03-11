import React, { useState } from 'react'
import ProductCreatorForm from './ProductCreatorForm.js'

const ProductCreator = ({ state }) => {
  const [active, setActive] = useState(false)
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#fffbfb] border h-[100dvh] w-[350px] shadow-lg">
        <div className="font-bold text-center pt-[10px]">
          Functional Product Creator
        </div>
        <div
          className="flex flex-row items-center hover:cursor-pointer w-fit"
          onClick={() => {
            setActive(true)
          }}
        >
          <img
            className="filter invert-[.73] sepia-[.09] saturate-[.21] hue-rotate-[355deg] brightness-[.8] contrast-[.85] h-[50px]"
            alt="plus_sign"
            src="/plus.png"
          />
          <div className="text-[#949494]">New Product</div>
        </div>
        {active ? (
          <div className="relative m-[10px] border bg-[#ffffff] shadow-sm p-[10px]">
            <ProductCreatorForm />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ProductCreator
