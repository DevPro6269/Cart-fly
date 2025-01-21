import React from 'react'
import ImageCursol from '../Components/Header/ImageCursol'
import Category_card from '../Components/Categories/Category_card'
import categorydata from "../Utils/ProductsData"
import { nanoid } from '@reduxjs/toolkit'
import Category_container from '../Components/Categories/Category_container'
import banner from "../assets/Black and Red Typographic Sale and Discount Instagram Story.mp4"
import { Link } from 'react-router-dom'

const HomePage = () => {


  return (
    <>
    <ImageCursol/>

    <section className='container mx-auto'>
     

    <div className='flex gap-20'>
     
    <div>
    <Category_container text={"Best in Mens Collection"} arr={categorydata.Mens}  />

  <Category_container text={"Trending in Women"}  arr={categorydata.Women} />

  <Category_container text={"Mobile & Laptop"} arr={categorydata.Electronics}  />
    </div>



{/* sales banner  */}
    <Link to={"/sale"}>
    <div className='bg-yellow-400 h-full w-80 '>
   <video className='' src={banner} loop autoPlay></video>
    </div>
    </Link>


    </div>



    <br /> 

    <Category_container text={"Home & Other "} arr={categorydata.Home} arr2={categorydata.Other} />

    <br /> 
   
    </section>
    </>
  )
}

export default HomePage