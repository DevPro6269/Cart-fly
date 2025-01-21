import React from 'react'
import { useDispatch } from 'react-redux';
import { addtocart } from '../../Store/Cartslice';
import {Link} from 'react-router-dom'

const FilterCard = ({item}) => {
   let dispatch = useDispatch()
    
  return (
    <>
<section className="w-screen">
  
  <div className="m-4 mx-auto max-w-screen-lg bg-white rounded-md border border-gray-100 text-gray-600 shadow-md">
    <div className="relative flex h-full flex-col text-gray-600 md:flex-row">
      <div className="relative p-8 md:w-4/6"> 
        <div className="flex flex-col md:flex-row">
          <h2 className="mb-2 text-2xl font-black">{item.title}</h2>
        </div>
        <p className="mt-3 font-sans text-base tracking-normal">{item.description}</p>
        <div className="flex flex-col md:flex-row md:items-end">
          <p className="mt-6 text-4xl font-black">${item.price}<sup className="align-super text-sm">00</sup></p>
        
        </div>
        <div className="mt-8 flex flex-col sm:flex-row">
          <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-black py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add To Cart
          </button>
          <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">Preview</button>
        </div>
      </div>
      <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
        <img className="block h-auto max-w-full rounded-md " src={item.thumbnail} alt="Shop image" />
      </div>
    </div>
  </div>
  
  </section>
    </>
  )
}

export default FilterCard