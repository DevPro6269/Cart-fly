import React from 'react'

const InfoFeild = ({heading,para}) => {
  return (
   <>
  <div className='flex flex-col mr-14 gap-2  '>
     <h1 className='text-3xl '>{heading}</h1>
     <p>{para}</p>
     </div>
   </>
  )
}

export default InfoFeild