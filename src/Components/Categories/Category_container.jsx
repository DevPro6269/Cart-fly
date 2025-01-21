import React from 'react'
import Category_card from './Category_card'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'

const Category_container = ({arr,arr2=[],text}) => {


function renderCategoryCard(item){
return item.map((item)=>{
  return <Link key={item.slug} to={`/products/${item.slug}`}>
  <Category_card key={nanoid()} item={item}/>
  </Link>
 })
}


  return (
    <>
    <h1 className='bg-white text-2xl p-2'>{text}</h1>
    <div  className='flex gap-3 bg-white  flex-wrap'>
     {renderCategoryCard(arr)}
      {renderCategoryCard(arr2)}
    </div>
    </>
  )
}

export default Category_container