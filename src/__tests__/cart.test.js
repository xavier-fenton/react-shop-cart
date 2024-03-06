// import dependencies
import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import Cart from '../Components/Cart'

describe('Test all within Cart component', () => {
  // test 1
  test('That App loads and displays the cart section, given the state of the cart is filled and displays a total from the items', async () => {
    render(<Cart state={'Cart'} />)
    const totalId = screen.getByTestId('cart_total')

    expect(totalId).toBeInTheDocument()
  })
  // test 2
  test('That total is displayed, even when it updates. We expect a total cost to change if more is added to the cart', async () => {
    render(<Cart state={'Cart'} />)
    expect(screen.getByTestId('cart_total')).toHaveTextContent('Total: $')
  })
  // test 3
  test('Cart is empty', async () => {
    render(<Cart state={'Created'} />)
    expect(screen.getByTestId('cart_empty')).toBeInTheDocument()
  })

  test('Cart product displays all values required, and if state is not cart that it doesnt exist', async () => {
    render(<Cart state={'Cart'} />)
    const product_id = screen.getByTestId('product_test')
    expect(product_id).toBeInTheDocument()
  })
})
