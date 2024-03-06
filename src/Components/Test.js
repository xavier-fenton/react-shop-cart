import { React, useContext } from 'react'
import { productContext } from '../shopContext'

const Test = () => {
  const context = useContext(productContext)

  return (
    <div>
      <div>Testing Page</div>
      <div>Test useContext</div>
      <div className="flex flex-row items-center gap-5">
        <div className="p-[10px] border w-fit rounded-md ml-5 mt-5 h-[50%]">
          <div
            dangerouslySetInnerHTML={{ __html: context.products[0].title }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: context.products[0].price }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: context.products[0].description,
            }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: context.products[0].inventory }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: context.products[0].state }}
          />
        </div>
        <div>State: {context.products[0].state}</div>
      </div>
      <div className="flex flex-row items-center gap-5">
        <div className="p-[10px] border w-fit rounded-md ml-5 mt-5 h-[50%]">
          <div
            dangerouslySetInnerHTML={{ __html: context.cartItems[0].title }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: context.cartItems[0].price }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: context.cartItems[0].description,
            }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: context.cartItems[0].inventory }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: context.cartItems[0].state }}
          />
        </div>
        <div>State: {context.cartItems[0].state}</div>
      </div>
    </div>
  )
}

export default Test
