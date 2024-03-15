import React, { useMemo, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import products from '../data/products.json'
const TestLocalStorage = () => {
  const [item, setItems] = useLocalStorage('localtest', [])
  const [loader, setLoader] = useState(false)
  useMemo(() => {
    if (item.length === 0) {
      return null
    } else return item
  }, [item])
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
          set
        </button>
      </div>
      <div>
        <button
          className="border p-2 m-10"
          onClick={() => {
            localStorage.clear()
            setLoader(false)
          }}
        >
          unset
        </button>
      </div>
      <div className="flex flex-col gap-4 ml-4">
        {loader ? (
          <div>
            {item !== undefined
              ? item.map((product) => {
                  return (
                    <>
                      <div className="border flex w-fit flex-col p-4">
                        <div>{product.title}</div>
                        <div>{product.description}</div>
                        <div>{product.price}</div>
                        <div>{product.inventory}</div>
                      </div>
                    </>
                  )
                })
              : null}
          </div>
        ) : null}
      </div>
    </>
  )
}

export default TestLocalStorage
