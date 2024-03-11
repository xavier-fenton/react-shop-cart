import Cart from './Components/Cart'
import ProductCreator from './Components/ProductCreator'
import Products from './Components/ProductsColumn'
import ViewProducts from './Components/ViewProducts'
import { useStore } from './store'
import { productContext } from './shopContext'
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
        <productContext.Provider value={productContext}>
          <ProductCreator />
          <ViewProducts />
          <Cart />
        </productContext.Provider>
      </div>
    </div>
  )
}

export default App
