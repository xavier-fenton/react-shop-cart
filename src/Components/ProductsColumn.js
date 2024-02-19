import React from 'react'
import Products from './Products'
// import { shallow } from 'zustand/shallow'

const ProductsColumn = () => {
  // const products = useStore(
  //   (store) => store.products.filter((product) => product.state === state),
  //   shallow
  // )
  const state = 'test'
  return (
    <div className="flex flex-col items-center">
      <div>Products</div>
      <div className="bg-[#fffbfb] border h-[500px] w-[350px] shadow-lg">
        <Products state={state} />
      </div>
    </div>
  )
}

export default ProductsColumn
