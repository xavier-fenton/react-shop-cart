import React from 'react'
import { useStore } from '../store'

const CartItems = ({ state }) => {
  const cartItems = useStore((store) =>
    store.products.filter((products) => products.state === state)
  )

  return (
    <>
      {state === 'Cart' ? (
        cartItems.map((products) => {
          return (
            <div className="p-[10px] m-[10px] border bg-[#ffffff]">
              <div className="border-b-[1px] border-dashed">
                <div>{products.title}</div>
              </div>
              <div className="flex justify-between py-5">
                <div>{products.inventory}</div>
                <div>{products.price}</div>
              </div>
            </div>
          )
        })
      ) : (
        <div className="pt-[20px] text-center">cart empty</div>
      )}
    </>
  )
}

export default CartItems
