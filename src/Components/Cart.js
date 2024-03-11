import React, { useContext, useMemo } from 'react'
import CartItems from './CartItems'
import { productContext } from '../shopContext'

const Cart = () => {
  const context = useContext(productContext)
  // const cartContext = context.cartItems.filter((cart_Items) => {
  //   return cart_Items.state === 'Cart'
  // })

  // const cart_products = useMemo(() => {
  //   let total = 0
  //   if (cartContext.length >= 1) {
  //     total = cartContext.reduce(
  //       (accum, cart_product) => accum + cart_product.price,
  //       0
  //     )
  //   }
  //   return total
  // }, [cartContext])

  return (
    <div className="flex flex-col items-center h-[100dvh]">
      <div className="bg-[#f1efef] border border-[#f1efef] h-[100dvh] w-[350px] shadow-xl">
        <div className="font-bold text-center pt-[10px]">Your Cart</div>
        {/* {context.cartItems.length >= 1 ? (
          cartContext.map((products) => (
            <div key={uuidv4()} className="flex flex-col">
              <CartItems items={products} key={uuidv4()} />
            </div>
          ))
        ) : (
          <div className="text-center">cart empty</div>
        )}
        {cartContext.length !== 0 ? (
          <div className="flex justify-end px-5">Total: ${cart_products} </div>
        ) : null} */}
      </div>
    </div>
  )
}

export default Cart
