import { createContext } from 'react'

const context = {
  products: [
    {
      title: 'Product Test',
      price: 50,
      inventory: 1,
      description: 'Products is cool',
      state: 'Created',
    },
  ],
  cartItems: [
    {
      title: 'Product Test',
      price: 50,
      inventory: 1,
      description: 'Products is cool',
      state: 'Cart',
    },
  ],
}

export const productContext = createContext(context)
