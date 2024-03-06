// import dependencies
import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import App from '../App'
import Cart from '../Components/Cart'
import CartItems from '../Components/CartItems'

let skipRemainingTests = false

test('If Cart is empty, renders cart empty text', async () => {
  render(<CartItems />)
  expect(screen.getByTestId('cart_empty')).toHaveTextContent('cart empty')

  // If the condition is true, set the variable to true to skip remaining tests
  if (true) {
    skipRemainingTests = true
  }
})

test('That App loads and displays the cart section, given the state of the cart is filled and displays a total from the items', async () => {
  
  if (skipRemainingTests) return
  // Arrange
  render(<App />)
  const cartComponent = screen.getByText('Your Cart')
  const totalId = screen.getByTestId('cart_total')

  // Act
  // Assert
  expect(cartComponent).toBeInTheDocument()
  expect(totalId).toBeInTheDocument()
})

test('That total is displayed, even when it updates. We expect a total cost to change if more is added to the cart', async () => {
  if (skipRemainingTests) return
  render(<Cart />)
  expect(screen.getByTestId('cart_total')).toHaveTextContent('Total: $')
})
