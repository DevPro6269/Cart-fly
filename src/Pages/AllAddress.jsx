import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Addresscard from '../Components/Card/Addresscard';

const AllAddress = () => {
    const add= JSON.parse(localStorage.getItem("myItem"))||[]
    const[address,setAddress]=useState(add);

    function handleDefault(id) {
      let updatedAddress = address.map((item) => {
        if (item.id === id) {
         
          return { ...item, default: true };
        } else {
          
          return { ...item, default: false };
        }
      });
    
    
      setAddress(updatedAddress);
    
      localStorage.setItem("myItem", JSON.stringify(updatedAddress));
    }
    
   function handleRemove(id){

    let filterdAddress = address.filter((item)=>item.id!=id)
    setAddress(filterdAddress)
    localStorage.setItem("myItem", JSON.stringify(filterdAddress));
   }
  
   
function changeCase(str){
    str.split("")[0].toUpperCase()+str.slice(1)
}

  return (
   <>
   <br /> <br />
   <section className='bordrer-2 flex gap-3 container flex-wrap mx-auto'>
    <h1 className='w-full text-3xl font-medium'>Your Addresses</h1>
   <Link to={"/addresform"}>
   <div className='p-2 h-60 w-60 justify-center items-center flex border-2 flex-col'>
    <i className="fa-solid text-6xl fa-plus" style={{color: "#ebeef4"}}></i>
    <p className='text-gray-500'>Add Address</p>
    </div>
   </Link>
   {
   address.length > 0 && address.map((item) => (
  <Addresscard key={item.id} handleDefault={(id)=>handleDefault(id)} handleRemove={(id)=>handleRemove(id)} address={item} />
))
}

   </section>
   </>
  )
}

export default AllAddress