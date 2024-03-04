import React from 'react'
import CartItems from './CartItems'

const Cart = ({ state }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#f1efef] border border-[#f1efef] h-[100dvh] w-[350px] shadow-xl">
        <div className="font-bold text-center pt-[10px]">Your Cart</div>
        <CartItems state={state} />
      </div>
    </div>
  )
}

export default Cart
