import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetchData from "../Hooks/UseFetchData"

export const Products = () => {
    
    let {slug} = useParams()
    

    const {data,loading,error} = UseFetchData(`https://dummyjson.com/products/category/${slug}`)
      console.log(data);
      
    
  return (
    <section>

    </section>
  )
}
