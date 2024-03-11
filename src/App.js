import Cart from './Components/Cart'
import ProductCreator from './Components/ProductCreator'
import ViewProducts from './Components/ViewProducts'
import { productContext } from './shopContext'
function App() {
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
