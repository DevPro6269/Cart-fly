import React from 'react'
// import img from "../assets/Black and White Star Y2k Streetwear Logo.png"
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"


const Navbar = () => {

  let cart = useSelector((state)=>state.cart.item)
   let stock = cart.reduce((acc,curr)=>acc+curr.quantity,0)
  
  return (
    <>
    <nav className='bg-black flex z-50 justify-between  fixed p-3 w-full'>

        {/* nav logo */}
        <div className='text-white'>
            <span className='font-bold text-orange-400'>CART <sub className='font-semibold text-green-400'>FLY</sub> <i className="fa-brands text-white fa-fly"></i></span>
        </div>
        

        <div className='flex'>
          <div><i className="fa-solid p-2 fa-magnifying-glass bg-gray-300 inline-block"></i></div>
          <input type="text" placeholder='search for products' className='border-1 bg-gray-200 p-1 outline-none' />



         {/* nav link list */}
          <ul className='flex text-white  ml-10 gap-3'>
            <Link to={"/"}>
          <li className='font-semibold font-[cursive] text-xl hover:text-red-500'> <i>Home</i></li>  
            </Link>
          
          <Link >
            <li className='font-semibold font-[cursive] text-xl hover:text-red-500'> <i>Men</i></li>
          </Link>
        
           <Link to={"/sale"}>
           <li className='font-semibold font-[cursive] text-xl hover:text-red-500'> <i>Sale</i></li>
           </Link>
           
            <li className='font-semibold font-[cursive] text-xl hover:text-red-500'> <i>kids</i></li>

            <li className='font-semibold font-[cursive] xs text-xl hover:text-red-500'> <i>Electronics</i></li>

        </ul>
        </div>


        

        {/* item cart */}

        <Link to={"/cart"}>
        <div className='text-white  mr-5'>
            <span className={ `bg-orange-500 px-1 ${stock?"inline":"hidden"} text-sm rounded-full absolute top-1 right-7`}>{stock}</span>
            <i className="fa-solid fa-xl  fa-cart-shopping"></i>
        </div>
        </Link>
    </nav>
    <br /> <br /> <br />
    </>
  )
}

export default Navbar