import Cart from './Components/Cart'
import ProductCreator from './Components/ProductCreator'
import Products from './Components/ProductsColumn'
import { useStore } from './store'

function App() {
  //Global state for testing
  let findState = useStore((store) =>
    store.products.find((products) => {
      return products
    })
  )
  const state = findState.state

  return (
    <div>
      <div className="flex flex-row justify-between">
        <ProductCreator state={state} />
        <Products state={state} />
        <Cart state={state} />
      </div>
    </div>
  )
}

export default App
