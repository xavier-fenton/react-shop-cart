import React, { useEffect, useState } from 'react'

import { ProductsProps,  useShoppingCart } from '../context/shopContext'


const Products: React.FC<ProductsProps> = ({products}) => {
  const {addToCart} = useShoppingCart()
  const [change, setChange] = useState(false)

  useEffect(() => {
    const fetchdata = async () =>{
      try{
        const readLocalStorage = localStorage.getItem('shopping_cart')
        return readLocalStorage
      } catch (error){
        console.error('A problem finding localStorage',error)
      } finally {
        setChange(false)
      }
      
    }
    fetchdata()
  }, [change])



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
            onClick={() => {
              addToCart(products)
              setChange(true)              
            }}
          >
            Add to cart
          </button>
        </div>
   
    </div>
  )
}

export default Products
