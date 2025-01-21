import React from 'react'

const Category_card = ({item}) => {
    
  return (
    <>
    <div className='flex h-52 w-40  shadow-xl flex-col'>
        <img 
        className='h-40 w-40 rounded-full border-2 border-white object-cover'
        src={item.src} alt="" />
        <h1 className='text-base  font-semibold text-center '>{item.category}</h1>
    </div>
    </>
  )
}

export default Category_card