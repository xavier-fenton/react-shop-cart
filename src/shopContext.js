import { createContext, useContext, useState } from 'react'

// const ProductContext = {
//   products: [
//     {
//       title: 'Product Test',
//       price: 50,
//       inventory: 1,
//       description: 'Products is cool',
//       state: 'Created',
//     },
//     {
//       title: 'Product Test2',
//       price: 50,
//       inventory: 1,
//       description: 'Products is cool',
//       state: 'Created',
//     },
//     {
//       title: 'Product Test3',
//       price: 50,
//       inventory: 1,
//       description: 'Products is cool',
//       state: 'Created',
//     },
//   ],
//   cartItems: [],
//   removeFromCart: (item) => {
//     const updateCartItems = ProductContext.cartItems.filter(
//       (cartProduct) => cartProduct.title !== item.title
//     )
//     ProductContext.setCartItems(updateCartItems)
//   },

//   setCartItems: (item) => {
//     ProductContext.cartItems = [...ProductContext.cartItems, item]
//   },
//   addToCart: (item, state) => {
//     console.log(item)
//     ProductContext.setCartItems((prevCartItems) => [...prevCartItems, item])
//   },
// }

const ShoppingCartContext = createContext({})

export function ShoppingCartProvider({ children }) {
  function removeFromCart(item) {
    const updateCartItems = item.filter(
      (cartProduct) => cartProduct.title !== item.title
    )
    return setCartItems(updateCartItems)
  }

  function setCartItems(item) {
    item.cartItems = [...item.cartItems, item]
  }
  function addToCart(item) {
    console.log(item)
    return item.setCartItems((prevCartItems) => [...prevCartItems, item])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        removeFromCart,
        setCartItems,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
