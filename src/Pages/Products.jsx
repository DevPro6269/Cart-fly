import React, { useState ,useEffect, useCallback} from 'react'
import { useParams } from 'react-router-dom'
import useProductData from "../Hooks/UseFetchData"
import FilterCard from '../Components/Card/FilterCard'
import Toast from "../Components/Card/Toast"

export const Products = () => {
    
    let {slug} = useParams()
    let url = `https://dummyjson.com/products/category/${slug}`
    
     const{data,error,loading} = useProductData(url)
    
     console.log(data);
     
    if(loading){
        return <div class="spinner-border m-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }
    if(error){
        return <div>{error.msg}</div>
    }
    if(!data){
        return <div>No products Available</div>
    }
    
    
      let dataArr= data.products
      
  return (
    
    <section className=' flex flex-wrap gap-6'>
        {
         dataArr.map((e)=>(
            <FilterCard item={e}/>
         ))
        }

    </section>
  )
}
