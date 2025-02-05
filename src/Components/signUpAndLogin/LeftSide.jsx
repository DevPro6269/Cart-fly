import React from 'react'

const LeftSide = ({src}) => {
  return (
    <div className='w-3/5 flex justify-center items-center  h-[600px]'>
        <img src={src} alt="" />
    </div>
  )
}

export default LeftSide