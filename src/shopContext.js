import { createContext } from 'react'

const ProductContext = {
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
      title: 'Product Test3',
      price: 50,
      inventory: 1,
      description: 'Products is cool',
      state: 'Cart',
    },
  ],
  removeFromCart: (item) => {
    const updateCartItems = ProductContext.cartItems.filter(
      (cartProduct) => cartProduct.title !== item.title
    )
    ProductContext.setCartItems(updateCartItems)
  },

  setCartItems: (item) => {
    ProductContext.cartItems = [...ProductContext.cartItems, item]
  },
  addToCart: (item, state) => {
    console.log(item)
    ProductContext.setCartItems((prevCartItems) => [...prevCartItems, item])
  },
}

export const productContext = createContext(ProductContext)
