import React from 'react'
import UseFetchData from '../../Hooks/UseFetchData'
import Card from '../Card/Card';
import { Link, Links } from 'react-router-dom';

export const AllProducts = () => {

    const {data,loading,error} = UseFetchData('https://dummyjson.com/products')
    
    if(loading){
      return <div>Loading.....</div>
    }
    if(error){
      return <div>{error.message}</div>
    }
    if(!data){
      return <h1>No Products Available</h1>
    }
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayName = days[today.getDay()];
    console.log(data,error,loading);
    
    let All_products = data.products
    
  return (

    <>
   <section className=' border-2 container mx-auto border-orange-400'>
    <h1 className='text-center text-2xl text-red-500 font-bold'>Deal of the {dayName}: Limited Time Only!</h1>
   </section>
   <br />

    <section className='flex flex-wrap mx-auto container gap-4'>
{
  All_products.map((item)=>(
    <Card key={item.id} item={item}/>
  ))
}
    </section>
    </>
  )
}
