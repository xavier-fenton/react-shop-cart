import React from 'react'

const CartItems = ({ items }) => {
  return (
    <>
      {items !== null ? (
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
              }}
              className="border w-fit p-2 rounded-md text-[10px] text-[#e6e6e6] bg-[#b4b4b4]"
            >
              remove
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default CartItems
