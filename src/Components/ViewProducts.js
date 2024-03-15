import React from 'react'

const ViewProducts = () => {
  return (
    <div className="flex items-center">
      <div className="border p-[20px] flex items-center h-fit">
        <button
          onClick={(e) => {
            e.preventDefault()
            window.location.href = '/products'
          }}
        >
          View Products
        </button>
      </div>
    </div>
  )
}

export default ViewProducts
