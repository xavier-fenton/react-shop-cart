import { createContext, useContext, ReactNode} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

export interface CartItems
{
  title: string,
  id: number,
  price: number,
  inventory: number, 
  description: string,  
}
export interface shopProducts  {
  shopProducts: shopProducts[]
}
export interface ProductsProps {
  products: CartItems; 
}
// type SetCartItems = React.Dispatch<SetStateAction<CartItems[]>>

type ShoppingCartProviderProps = {
  children: ReactNode
}


type ShoppingCartContext = {
  addToCart: (item: any) => void
  // removeFromCart: (item: CartItems, cartItems: CartItems[]) => void
  increaseCartItems: (item: any) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
 const [shopItem, setShopItem ] = useLocalStorage('shopping_cart', [])


  // function removeFromCart(item: CartItems, cartItems: CartItems[]): void {
    
  //   const updateCartItems: CartItems[] = cartItems.filter(
  //     (cartProduct: CartItems) => cartProduct.title !== item.title
  //   )
  //   return setCartItems(updateCartItems)
  // }

  function increaseCartItems(item: any) {
   
    
   }
    
    

  
  function addToCart(item: CartItems): void {
    // a function in setshopitem that returns items, if there are items append to the array, if no items set return just item
    if(shopItem.length >= 1){
      setShopItem(() => {
        return [...shopItem, item]
      })
    } else return setShopItem([item])
 
    increaseCartItems(item)
  }
  

  return (
    <ShoppingCartContext.Provider
      value={{addToCart, increaseCartItems}}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
