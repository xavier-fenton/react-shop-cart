import { createWithEqualityFn } from 'zustand/traditional'

const store = (set) => ({
  products: [
    {
      title: 'Product Test',
      price: 50,
      inventory: 1,
      description: 'Products is cool',
      state: 'Created',
    },
  ],
})

export const useStore = createWithEqualityFn(store)
