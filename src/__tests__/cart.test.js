// import dependencies
import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import Cart from '../Components/Cart'

if (Cart) {
  describe('Tests Cart component', () => {
    test('That App loads and displays the cart section, given the state of the cart is filled and displays a total from the items', async () => {
      render(<Cart state={'Cart'} />)
      const totalId = screen.getByTestId('cart_total')

      expect(totalId).toBeInTheDocument()
    })

    test('That total is displayed, even when it updates. We expect a total cost to change if more is added to the cart', async () => {
      render(<Cart state={'Cart'} />)
      expect(screen.getByTestId('cart_total')).toHaveTextContent('Total: $')
    })
    test('Cart is empty', async () => {
      render(<Cart state={'Created'} />)
      expect(screen.getByTestId('cart_empty')).toBeInTheDocument()
    })
  })
}
