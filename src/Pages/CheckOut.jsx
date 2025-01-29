import React, { useEffect, useState } from 'react'
import PaymentOption from '../Components/Checkout/PaymentOption'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PriceDetails from '../Components/Cart/PriceDetails'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearcart } from '../Store/Cartslice'

const Checkout = () => {
  const [defadd,setdefAddress]=useState(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();
 useEffect(()=>{
  const addresses = JSON.parse(localStorage.getItem("myItem"))||[]
  const defaultAdd = addresses.filter((item)=>item.default==true)
  setdefAddress(defaultAdd)
  console.log(defaultAdd);
  
 },[])
function handleSubmit(e){
  e.preventDefault();
  dispatch(clearcart())
  navigate("/")
}


let cart = useSelector((state)=>state.cart.item)
console.log(cart);


let total = cart.reduce((acc,curr)=>(curr.quantity*curr.price)+acc,0)


  return (
    <>
    <section className='mx-auto container items-center flex-col  flex '>
   
      {/* <div className=' border-2 w-3/5 rounded-sm p-2'>
        <h1 className='text-2xl'>Delivering to {defaultAdd[0].fullName}</h1>
        <p>{defaultAdd[0].flatHouse},{defaultAdd[0].areaStreet},{defaultAdd[0].City},{defaultAdd[0].state},{defaultAdd[0].pincode}</p>
        <p>{defaultAdd[0].country}</p>

        <Link className='text-blue-400' to={"/addresses"} >Change</Link>
      </div>
        */}
       {/* <br /> */}


       <div className='w-3/5'>
       <h1 className='text-2xl p-1'> Choose A Payment method</h1>

       <br />
       <form action="" onSubmit={(e)=>handleSubmit(e)} className=' gap-3 flex flex-col p-2'>
       <PaymentOption id={"phonepe"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s"}/>

       <PaymentOption id="paytm" src={"https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg"}/>

       <PaymentOption id="gpay" src={"https://www.cdnlogo.com/logos/g/15/google-pay-2020.svg"}/>

       <PaymentOption id="cod"  text='Cash On delivery' />

       <PaymentOption id={"wallet"} text={<i className="fa-solid fa-wallet"></i>}/>

       <h1 className='text-2xl font-semibold '>Total Amount to pay : {total}$</h1>
       <button type='submit' className='border-2 w-2/5 p-2 text-xl bg-green-400 text-white rounded-lg'>Proceed to buy</button>
       </form>
       </div>

  
    </section>
    </>
  )
}

export default Checkout