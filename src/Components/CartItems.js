import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const CartItems = ({ items }) => {
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
