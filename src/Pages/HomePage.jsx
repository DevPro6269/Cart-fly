import React from 'react'
import ImageCursol from '../Components/Header/ImageCursol'
import Category_card from '../Components/Categories/Category_card'
import categorydata from "../Utils/ProductsData"
import { nanoid } from '@reduxjs/toolkit'

const HomePage = () => {
console.log(categorydata.Mens);

  return (
    <>
    <ImageCursol/>
    <div className='flex gap-3 flex-wrap'>
     {
      categorydata.Mens.map((item)=>{
       return <Category_card key={nanoid()} item={item}/>
      })
     }
    </div>

    <br /> <br /> 

    <div className='flex gap-3 flex-wrap'>
     {
      categorydata.Women.map((item)=>{
       return <Category_card key={nanoid()} item={item}/>
      })
     }
    </div>

    <br /> <br />


    <div className='flex gap-3 flex-wrap'>
     {
      categorydata.Home.map((item)=>{
       return <Category_card key={nanoid()} item={item}/>
      })
     }
    </div>

    <br /> <br /> 


    <div className='flex gap-3 flex-wrap'>
     {
      categorydata.Other.map((item)=>{
       return <Category_card key={nanoid()} item={item}/>
      })
     }
    </div>
    </>
  )
}

export default HomePage