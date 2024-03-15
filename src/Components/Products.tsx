import React from 'react'

import { ProductsProps,  useShoppingCart } from '../shopContext'


const Products: React.FC<ProductsProps> = ({products}) => {
  const {addToCart} = useShoppingCart()
  
  // const product: ProductsProps = {id, title, price, description, inventory}

  return (
    <div>
      
        <div className="p-[10px] bg-white border rounded-lg m-[5px] flex flex-col gap-5">
          <div className="bg-[#b4b4b4] rounded w-fit px-[5px] text-sm text-[#fff5f5] flex flex-row gap-2">
            <div className="text-[#ffffff]">{products.title}</div>
          </div>

          <div className="bg-[#b4b4b4] rounded w-fit px-[5px] text-sm text-[#fff5f5] flex flex-row gap-2">
            <div className="text-[#ffffff]">{products.description}</div>
          </div>
          <div className="bg-[#b4b4b4] rounded w-fit px-[5px] text-sm text-[#fff5f5] flex flex-row gap-2">
            <div className="text-[#ffffff]">${products.price}</div>
          </div>
          <div className="bg-[#b4b4b4] rounded w-fit px-[5px] text-sm text-[#fff5f5] flex flex-row gap-2">
            <div className="text-[#ffffff]">Quantity: {products.inventory}</div>
          </div>
          <button
            className="bg-[#adadad] w-fit text-[10px] p-[10px] rounded-3xl text-[#fff]"
            onClick={() => {addToCart(products);              
            }}
          >
            Add to cart
          </button>
        </div>
   
    </div>
  )
}

export default Products
