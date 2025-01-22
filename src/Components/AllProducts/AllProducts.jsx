import React, { useEffect } from 'react'
import UseFetchData from '../../Hooks/UseFetchData'
import Card from '../Card/Card';
import { Link, Links, useFetcher } from 'react-router-dom';
import { useMemo,useState } from 'react';


export const AllProducts = () => {
  const [sortOption, setSortOption] = useState('');
  // const[selectedFilter,setSelectedFilter]=useState([])
  
  const handleChange = (e) => {
    setSortOption(e.target.id);
    // setSelectedFilter((prev)=>([...prev,e.target.id]))
  };

  const url = useMemo(() => {
    if (sortOption === 'highTolow') {
      return "https://dummyjson.com/products?sortBy=price&order=desc";
    }
    if (sortOption === 'lowToHigh') {
      return "https://dummyjson.com/products?sortBy=price&order=asc";
    }
    return "https://dummyjson.com/products"; 
  }, [sortOption]);



  let {data,loading,error} = UseFetchData(url)
  
    
    if(loading){
      return   (
        <section className='h-screen z-50 w-screen justify-center flex items-center'>
          <div className="spinner-border m-5" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
        </section>
      )
    }
    if(error){
      return <div>{error.message}</div>
    }
    if(!data){
      return <h1>No Products Available</h1>
    }
    
    
  return (

    <>
    
    {/* Filters section for data  */}

   <div className='w-1/4 p-4 sticky top-16 h-full border-2'>
    <h1 className='text-2xl p-2'>Filter Products</h1> 
    <hr />
   
    <h1 className='text-xl p-1'>Based on Price</h1>
    <input id='highTolow' onChange={handleChange} name='price' type="radio" /> &nbsp;
    <label htmlFor="highTolow">High To Low</label>
    <br />

    <input id='lowToHigh'onChange={handleChange} name='price' type="radio" /> &nbsp;
    <label htmlFor="lowToHigh">Low To High</label>
     <br />
    <input id='popular' onChange={handleChange} name='price' type="radio" /> &nbsp;
    <label htmlFor="popular">Popularity</label>

    </div>


   {/* All products */}
   
<div className='w-3/4'>
    <section className='flex flex-wrap  justify-center  gap-4'>
{
  data&&data.products.map((item)=>(
    <Card key={item.id} item={item}/>
  ))
}
    </section>



  </div>
 
    </>
  )
}
