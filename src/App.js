import Cart from './Components/Cart'
import ProductCreator from './Components/ProductCreator'
import Products from './Components/ProductsColumn'

function App() {
  const state = 'Creating'
  return (
    <div>
      <div className="flex flex-row justify-between">
        <ProductCreator state={state} />
        <Products />
        <Cart />
      </div>
    </div>
  )
}

export default App
