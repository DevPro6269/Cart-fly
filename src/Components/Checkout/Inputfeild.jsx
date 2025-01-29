import React from 'react'

const Inputfeild = () => {
  return (
    <div className='flex'>
    <input type="radio"  name="address" id="address" />
    <label htmlFor="address">
      <div className='border-2 p-2'>
        <h1>dev rathore</h1>
        <p>chota bajar,magroni</p>
        <p>gwalior , madhya-pradesh , 474001</p>
      </div>
    </label>
    </div>
  )
}

export default Inputfeild