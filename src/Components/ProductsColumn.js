import React, { useContext } from 'react'
import Products from './Products'
import { productContext } from '../shopContext'
import Cart from './Cart'

const ProductsColumn = () => {
  const context = useContext(productContext)

  return (
    <div className="flex flex-col items-center">
      <div>Products</div>
      <div className="bg-[#fffbfb] border h-fit w-[350px] shadow-lg">
        {context &&
          context.products.map((products) => (
            <Products
              title={products.title}
              key={products.title}
              price={products.price}
              description={products.description}
              state={products.state}
            />
          ))}
      </div>
      <Cart />
    </div>
  )
}

export default ProductsColumn
