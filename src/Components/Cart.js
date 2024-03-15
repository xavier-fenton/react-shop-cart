import React, { useEffect, useState } from 'react'
import CartItems from './CartItems'
const Cart = () => {
  const [value, setValue] = useState([])
  const [loading, setLoading] = useState(Boolean)
  const [empty, setEmpty] = useState(Boolean)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const localItems = localStorage.getItem('shopping_cart')

        if (localItems) {
          setValue(JSON.parse(localItems))
          setEmpty(false)
        }
        if (localItems === '[]') {
          setEmpty(true)
        }
      } catch (error) {
        console.error('Error fetching data from localStorage:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    
    
  }, [])

  const loader = <div>loading...</div>

  const cart_empty = <div>cart empty</div>

  return (
    <div className="flex flex-col items-center h-[100dvh]">
      <div className="bg-[#f1efef] border border-[#f1efef] h-[100dvh] w-[350px] shadow-xl">
        <div className="font-bold text-center pt-[10px]">Your Cart</div>
        {loading ? loader : null}
        {!loading && value
          ? value.map((product) => {
              return (
                <>
                  <div className="flex flex-col">
                    <CartItems items={product} />
                  </div>
                </>
              )
            })
          : null}
        {empty === true ? cart_empty : null}
      </div>
    </div>
  )
}

export default Cart
