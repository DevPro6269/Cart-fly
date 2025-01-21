import React, { useState,useEffect } from 'react'
import img1 from "../../assets/Blue & White Simple Winter Sale Twitter Post.png"
import img2 from "../../assets/Gray Minimalist New Collection Banner.png"
import img3 from "../../assets/Green and Yellow Simple Clean Shoes Sale Banner.png"
import { Link } from 'react-router-dom'
const ImageCursol = () => {

    let images = [img1,img2,img3]
    const[src,setSrc]=useState(img1)
    let count = 1

    useEffect(() => {
        const intervalId = setInterval(() => {
          setSrc(images[count]) 
          
          if(count!=images.length-1){
            count++
          }else{
            count=0
          }
          
        }, 3000);
        // Cleanup interval when component unmounts
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    

  return (
    <>
    <Link to={"/sale"}>
    <div className='w-full h-[450px] border-2 p-1'>
    <img src={src} className='h-full w-full' alt="" />
    </div>
    </Link>
    <br />
    </>
  )
}

export default ImageCursol