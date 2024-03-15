import React from 'react'
import Products from './Products'
import Cart from './Cart'
import storeItems from '../data/products.json'

const ProductsColumn = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="bg-[#fffbfb] border h-[100dvh] w-[100%] shadow-lg">
        <div className="pb-5 text-center pt-5">Products</div>
        <div className="grid grid-cols-1 gap-4 px-10 md:grid-cols-2 lg:grid-cols-3">
          {storeItems
            ? storeItems.map((products) => (
                <Products key={products.id} products={products}
                />
              ))
            : null}
        </div>
      </div>
      <Cart />
    </div>
  )
}

export default ProductsColumn
