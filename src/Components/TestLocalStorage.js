import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import products from '../data/products.json'

const TestLocalStorage = () => {
  const [item, setItems] = useLocalStorage('localtest', [])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const handleStorageChange = () => {
      // Check if the 'localtest' key has changed
      const localItems = localStorage.getItem('localtest')
      if (localItems) {
        setLoader(true)
        setItems(JSON.parse(localItems)) // Update the item state with the new value from localStorage
      } else {
        setLoader(false)
        setItems('localtest', []) // If local storage is cleared, update item state with an empty array
      }
    }

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [setItems])

  return (
    <>
      <div>
        <button
          className="border p-2 m-10"
          onClick={() => {
            setItems(products)
            setLoader(true)
          }}
        >
          Set
        </button>
      </div>
      <div>
        <button
          className="border p-2 m-10"
          onClick={() => {
            setLoader(false)
            setItems([])
          }}
        >
          Unset
        </button>
      </div>
      <div className="flex flex-col gap-4 ml-4">
        {loader ? (
          <div>
            {item !== undefined
              ? item.map((product, index) => (
                  <div key={index} className="border flex w-fit flex-col p-4">
                    <div>{product.title}</div>
                    <div>{product.description}</div>
                    <div>{product.price}</div>
                    <div>{product.inventory}</div>
                  </div>
                ))
              : null}
          </div>
        ) : null}
      </div>
    </>
  )
}

export default TestLocalStorage
