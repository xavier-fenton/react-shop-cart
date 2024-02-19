import { create } from 'zustand'

const store = (set) => ({
  products: [{ title: 'Test Product', state: 'Creating' }],
})

export const useStore = create(store)
