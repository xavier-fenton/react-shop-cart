import React, { useContext } from 'react'
import Products from './Products'
import { productContext } from '../shopContext'
import Cart from './Cart'

const ProductsColumn = () => {
  const context = useContext(productContext)

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="bg-[#fffbfb] border h-[100dvh] w-[100%] shadow-lg">
        <div className="pb-5 text-center pt-5">Products</div>
        <div className="grid grid-cols-1 gap-4 px-10 md:grid-cols-2 lg:grid-cols-3">
          {context &&
            context.products.map((products) => (
              <Products
                title={products.title}
                key={products.title}
                price={products.price}
                inventory={products.inventory}
                description={products.description}
                state={products.state}
              />
            ))}
        </div>
      </div>
      <Cart />
    </div>
  )
}

export default ProductsColumn
