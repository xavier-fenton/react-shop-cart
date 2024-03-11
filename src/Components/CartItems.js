import React, { useContext, useMemo } from 'react'
import { productContext } from '../shopContext'

// import { v4 as uuidv4 } from 'uuid'

const CartItems = ({ items }) => {
  const context = useContext(productContext)
  useMemo(() => {
    console.log(items)
  }, [items])

  return (
    <>
      {items.state === 'Cart' ? (
        <div
          data-testid="product_test"
          className="p-[10px] m-[10px] border bg-[#ffffff]"
        >
          <div className="border-b-[1px] border-dashed">
            <div>{items.title}</div>
          </div>
          <div className="flex justify-between py-5">
            <div>{items.inventory}</div>
            <div>${items.price}</div>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault()
                console.log('clicked')
                context.removeFromCart(items)
              }}
              className="border w-fit p-2 rounded-md text-[10px] text-[#e6e6e6] bg-[#b4b4b4]"
            >
              remove
            </button>
          </div>
        </div>
      ) : (
        <div data-testid="cart_empty" className="pt-[20px] text-center">
          cart empty
        </div>
      )}
    </>
  )
}

export default CartItems
