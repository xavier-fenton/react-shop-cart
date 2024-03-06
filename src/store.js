import { createWithEqualityFn } from 'zustand/traditional'

const store = (set) => ({
  products: [
    {
      title: 'Product Test',
      price: 50,
      inventory: 1,
      description: 'Products is cool',
      state: 'Cart',
    },
    // {
    // //   title: 'Product2',
    // //   price: 60,
    // //   inventory: 1,
    // //   description: 'Products is cool',
    // //   state: 'Cart',
    // // },
  ],
})

export const useStore = createWithEqualityFn(store)
