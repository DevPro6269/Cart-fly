import React, { useEffect, useState } from 'react'
import categorydata from "../Utils/ProductsData"
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import GridCard from '../Components/Card/GridCard'
import OtherCatCard from '../Components/Card/OtherCatCard'
import useProductData from '../Hooks/UseFetchData'

const HomePage = () => {

  const[error,setdata]= useState(null)

  function renderData(arr){
    return arr.map((e)=>(
      <Link key={nanoid()} to={`/products/${e.slug}`}><OtherCatCard item={e}></OtherCatCard></Link>
    ))
  }
  let {error2} =  useProductData("http://localhost:8000/api")
useEffect(()=>{
   setdata(error2)
},[error2])
 
console.log(error);

  const{Home,Other,Electronics,Women,Mens} = categorydata;
   
  return (
    <>
    
    
 
  <div className='flex gap-3 container'>
    {
      Mens.map((e)=>(
       <Link key={nanoid()} className='h-80   w-full ' to={`/products/${e.slug}`}> <GridCard key={nanoid()} item={e}/></Link>
      ))
    }
  </div>

<br />
  <div className='p-2' >
    <h1 className='text-4xl text-center font-bold text-cyan-800'>SHOP BY CATEGORY</h1>
  </div>

  <br />

<div className='flex flex-wrap gap-5 ml-40 container'>
{renderData(Other)};
{renderData(Electronics)}
{renderData(Home)}
</div>


    </>
  )
}

export default HomePage