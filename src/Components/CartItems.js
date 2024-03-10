import React, { useContext } from 'react'
import { productContext } from '../shopContext'

import { v4 as uuidv4 } from 'uuid'

const CartItems = ({ items }) => {
  const removeFromCart = useContext(productContext)
  return (
    <>
      {items.state === 'Cart' ? (
        <div
          data-testid="product_test"
          key={uuidv4()}
          className="p-[10px] m-[10px] border bg-[#ffffff]"
        >
          <div key={uuidv4()} className="border-b-[1px] border-dashed">
            <div key={uuidv4()}>{items.title}</div>
          </div>
          <div key={uuidv4()} className="flex justify-between py-5">
            <div key={uuidv4()}>{items.inventory}</div>
            <div key={uuidv4()}>${items.price}</div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              console.log('clicked')
              removeFromCart.removeFromCart(items)
            }}
            className="border w-fit p-2 rounded-md text-[10px] text-[#e6e6e6] bg-[#b4b4b4]"
          >
            remove
          </button>
        </div>
      ) : (
        <div
          data-testid="cart_empty"
          key={uuidv4()}
          className="pt-[20px] text-center"
        >
          cart empty
        </div>
      )}
    </>
  )
}

export default CartItems
