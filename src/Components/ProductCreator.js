import React from 'react'
import ProductCreatorForm from './ProductCreatorForm.js'

function NewProduct() {
  return (
    <div>
      <div className="flex items-center">
        <img
          className="filter invert-[.73] sepia-[.09] saturate-[.21] hue-rotate-[355deg] brightness-[.8] contrast-[.85] w-[50px]"
          alt="plus_sign"
          src="/plus.png"
        />
        <div className="text-[#949494]">New Product</div>
      </div>
    </div>
  )
}

const ProductCreator = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#fffbfb] border h-[100dvh] w-[350px] shadow-lg">
        <div className="font-bold text-center pt-[10px]">
          Functional Product Creator
        </div>
        <div className="hover:cursor-pointer w-fit">{NewProduct()}</div>
        <div className="relative m-[10px] border bg-[#ffffff] shadow-sm p-[10px]">
          <ProductCreatorForm />
        </div>
      </div>
    </div>
  )
}

export default ProductCreator
