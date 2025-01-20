import React from 'react'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../Store/Cartslice'
import { Link } from 'react-router-dom'

const Card = ({
    item
}) => {

let dispatch = useDispatch()
  
  return (
    <>
   
   <div 
  key={item.id} 
  className='p-1 w-40 group flex flex-col border-t-4 border-2 border-t-orange-500 border-b-4 border-b-green-500 hover:bg-yellow-400 hover:scale-105 hover:shadow-lg  transition-all duration-300'
>
  <Link to={`/productDetails/${item.id}`}>
  <div className='flex justify-center items-center p-2'>
    <img src={item.images[0]} className='h-28 w-28' alt="product img"/>
  </div>
  </Link>
  

  <div className='bg-yellow-500  rounded-t-lg flex flex-col'>
    <h1 className='overflow-hidden m-1 text-ellipsis whitespace-nowrap'>{item.title}</h1>
    <h1 className='m-1 text-2xl'> &#8377;{item.price} </h1>
    <button onClick={()=>dispatch(addtocart(item))} className='p-1 px-2 self-center w-11/12 font-medium mb-1 bg-slate-400 rounded-lg'>Add To Cart</button>
  </div>
</div>

    </>
  )
}

export default Card