import React, { useMemo, useState } from 'react'
import CartItems from './CartItems'
import { useStore } from '../store'

const Cart = ({ state }) => {
  const cartItems = useStore((store) =>
    store.products.filter((products) => products.state === state)
  )
  const [total, setTotal] = useState(
    cartItems.length === 1 ? cartItems[0].price : null
  )

  const totals = useMemo(() => {
    if (cartItems.length === 1) {
      return setTotal(cartItems[0].price)
    } else if (cartItems.length !== 1) {
      let prices = []
      cartItems.forEach((object) => {
        prices.push(object.price)
      })
      let collected_totals = prices.reduce((accum, prev) => {
        return accum + prev
      }, total)
      return collected_totals
    }
  }, [total])

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#f1efef] border border-[#f1efef] h-[100dvh] w-[350px] shadow-xl">
        <div className="font-bold text-center pt-[10px]">Your Cart</div>
        <CartItems state={state} cartItems={cartItems} />
        {state === 'Cart' ? (
          <div
            aria-label="cost-total"
            data-testid="cart_total"
            className="flex justify-end pr-6
        "
          >
            Total: ${totals ? totals : total}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Cart
