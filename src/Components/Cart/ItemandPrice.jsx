import React from 'react'

export const ItemandPrice = ({name,price}) => {
  return (
    <>
    <div className='flex justify-between'>
        <h1>{name}</h1>
        <h1>{price}</h1>
    </div>
    </>
  )
}
