import React from 'react'

function PaymentOption({src="",id,text=""}) {
  return (
    <div className='p-2 border-2 rounded-md checked:outline w-3/5 flex gap-2'>
            <input type="radio" name='payment' id={id} /> 
            <label htmlFor={id}>
              <div className='flex gap-2'>
              {src && <img className='h-8 w-8' src={src} alt="" />}
                <h1 className='text-xl text-gray-500'>{text}</h1>
              </div>
            </label>
        </div>
  )
}

export default PaymentOption