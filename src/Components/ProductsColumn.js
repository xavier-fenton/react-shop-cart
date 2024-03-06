import React from 'react'
import Products from './Products'
import { useStore } from '../store'

const ProductsColumn = ({ state }) => {
  const products = useStore((store) => store.products)

  return (
    <div className="flex flex-col items-center">
      <div>Products</div>
      <div className="bg-[#fffbfb] border h-[500px] w-[350px] shadow-lg">
        {products.map((products) => (
          <Products
            title={products.title}
            key={products.title}
            price={products.price}
            description={products.description}
            state={products.state}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsColumn
