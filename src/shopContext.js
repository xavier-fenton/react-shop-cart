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
    {
      title: 'Product Test2',
      price: 50,
      inventory: 1,
      description: 'Products is cool',
      state: 'Created',
    },
    {
      title: 'Product Test3',
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
    {
      title: 'Product Test2',
      price: 50,
      inventory: 1,
      description: 'Products is cool',
      state: 'Cart',
    },
    {
      title: 'Product Test',
      price: 50,
      inventory: 1,
      description: 'Products is cool',
      state: 'Cart',
    },
    {
      title: 'Product Test2',
      price: 50,
      inventory: 1,
      description: 'Products is cool',
      state: 'Cart',
    },
  ],
  removeFromCart: (item) => {
    console.log(item)
    
  },
}

export const productContext = createContext(context)
