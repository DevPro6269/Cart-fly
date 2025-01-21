import React, { useEffect } from 'react'
import UseFetchData from '../../Hooks/UseFetchData'
import Card from '../Card/Card';
import { Link, Links } from 'react-router-dom';
import { useMemo,useState } from 'react';

export const AllProducts = () => {
  const [cachedData, setCachedData] = useState(null);

  const {data,loading,error} = UseFetchData('https://dummyjson.com/products')
   

    const dayName = useMemo(() => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[new Date().getDay()];
    }, []);
    

    useEffect(()=>{
      if(data && !cachedData){
        setCachedData(data)
        console.log(data);
      }
    },[cachedData,data])
    
    if(loading){
      return <div>Loading.....</div>
    }
    if(error){
      return <div>{error.message}</div>
    }
    if(!data){
      return <h1>No Products Available</h1>
    }
    
  
    
    
  return (

    <>
   <section className=' border-2 container mx-auto border-orange-400'>
    <h1 className='text-center text-2xl text-red-500 font-bold'>Deal of the {dayName}: Limited Time Only!</h1>
   </section>
   <br />

    <section className='flex flex-wrap mx-auto container gap-4'>
{
  data&&data.products.map((item)=>(
    <Card key={item.id} item={item}/>
  ))
}
    </section>
    </>
  )
}
