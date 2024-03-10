import Cart from './Components/Cart'
import ProductCreator from './Components/ProductCreator'
import Products from './Components/ProductsColumn'
import ViewProducts from './Components/ViewProducts'
import { useStore } from './store'

function App() {
  //Global state for testing
  // let findState = useStore((store) =>
  //   store.products.find((products) => {
  //     return products
  //   })
  // )
  // const state = findState.state

  return (
    <div>
      <div className="flex flex-row justify-between">
        <ProductCreator />
        <ViewProducts />
        <Cart />
      </div>
    </div>
  )
}

export default App
