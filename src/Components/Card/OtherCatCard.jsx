import React from 'react'

const OtherCatCard = ({item}) => {
  return (
    <>
    <div className='w-56 h-80 flex flex-col text-white items-center border-2 p-2 bg-green-700'>
        <img src={item.src} className="h-4/5" alt="" />
        <h1 className='text-bold text-lg text-ellipsis text-nowrap overflow-hidden'>{item.category}</h1>
        <h1 className='text-bold text-2xl'>50-80% OFF</h1>
        <h2 className='text-bold text-base'>SHOP NOW</h2>
    </div>
    </>
  )
}

export default OtherCatCard