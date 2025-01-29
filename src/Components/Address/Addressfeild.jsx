import React from 'react'

const Addressfeild = ({fieldName,name,fn,error,value}) => {
  return (
    <div className='w-3/5'>
    <label className='font-bold self-start' htmlFor="">{fieldName}</label> <br />
    <input type="text" name={name} value={value} onChange={(e)=>fn(e)} className='outline rounded-md p-1 w-full inline-block outline-black' />
    {error[name] && <p className="text-red-500 text-sm">{error[name]}</p>}
    </div>
  )
}

export default Addressfeild