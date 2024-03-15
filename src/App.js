import Cart from './Components/Cart'
import ProductCreator from './Components/ProductCreator'
import ViewProducts from './Components/ViewProducts'
import { ShoppingCartProvider } from './shopContext'
function App() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <ShoppingCartProvider>
          <ProductCreator />
          <ViewProducts />
          <Cart />
        </ShoppingCartProvider>
      </div>
    </div>
  )
}

export default App
