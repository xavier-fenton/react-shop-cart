# Creating a basic shop to understand global state, React and Tailwind

## Documenting the process
1. Currently building a store using JavaScript.
 <br>
 <br>

 First initialization of this project, I install Zustand for managing Global state (A small global state library package that reduces the difficulties that you may have face when using a library like Redux). I know I wanted to persist the state of my Cart across all pages of the project, therefore I was quick to jump to installing it. 
 
 But I soon found out about useContext, which I thought was a better use case as I feel using libraries that are built in to a framework is much better than using sourced/ external libraries.

 After using Zustand for a bit, and creating the store, with all my neccessary values. eg: Products, ProductsInCart and the functions I needed such as adding a new procuct, adding and removing from the Cart. Making the switch over to useContext wasn't too difficult. The Zustand store can easily be recreated and refactored into a useContext scenerio. Which I did. 

 But now I face a problem, of not knowing how to use useContext in the correct way. So I refactored my code again and am basically back at the start. 

 What I think I will be doing is redoing the whole project, and initialising it into TypeScript. I believe this will help me practice TypeScript while at the same time understand useContext a little better.

 ```javascript
  // shopContext.js
  // The current state of my context provider looks like:

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

 ```

 ```js
//  I'm going to apply this to a data.json file where I can replicate if I were fetching data from an api or database
 
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
  }
 ```
## Basic usage of useContext
 ```js
 
 const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("dark")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
  )
}
 ```



