import React, { useEffect, useState } from "react";
import UseFetchData from "../../Hooks/UseFetchData";
import Reviews from "./Reviews";
import { useParams } from "react-router-dom";
import ExtraInformation from "./ExtraInformation";
import { nanoid } from "@reduxjs/toolkit";

const ShowPage = () => {
  let {id} = useParams();


  let { data, loading, error } = UseFetchData(
    `https://dummyjson.com/products/${id}`
  );

  if (loading) {
    return (
      <section className='h-screen w-screen justify-center flex items-center'>
        <div className="spinner-border m-5" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
      </section>
    )
  }
  if (error) {
    return <div>{error.msg}</div>;
  }

  if (!data) {
    return <div>No Data Available</div>;
  }

  let Price = Math.floor(data.price);
  let discount = Math.floor(data.discountPercentage)

  return (
    <>
      <section className="flex mt-4">
        <div className="w-2/5 sticky  h-fit top-20 ">
          <img src={data.thumbnail} alt="" className="h-[500px]" />
        </div>


        <div className="w-1/2  flex flex-col gap-3  justify-center">

        {/* Title and Category in div  */}
          <div className="flex gap-2 items-center"> 
          <h1 className="text-3xl font-semibold" >{data.title}</h1>
          <p className="text-xl ">{data.rating}</p>
          <span className="fa fa-star text-xl text-orange-400"></span>
          </div>
            <p className="font-semibold text-gray-700">{data.brand}</p>
           <p className=" w-4/5">{data.description}</p>
           {/* Price and discount Information */}
            <div className="flex">
            <h1 className="text-bold text-2xl">{Math.floor(data.price)}$</h1> &nbsp;
            <span className=" text-lg line-through">{Math.floor((Price*100)/(100-discount))}$</span> &nbsp;
            <h1 className="text-lg font-medium text-green-500">{discount}% OFF</h1>
            </div>
            <p className="text-gray-600 font-thin">Free Delivery <i className="fa-solid fa-truck"></i> </p>
           <h1 className={`${data.availabilityStatus=="In Stock"?"text-green-500":"text-red-500"} font-semibold`} >{data.availabilityStatus}</h1>
           <h1>{data.returnPolicy}</h1>
           <button className="bg-red-600 mt-2 text-white rounded-lg font-semibold h-10 w-40 hover:bg-black p-2" > 
           <i className="fa-solid fa-bag-shopping"></i> &nbsp;
            Add to Cart</button>
           

             {/* Extra Information */}
             <ExtraInformation item={data}/>

           {/* Rating and reviews  */}

           <div className="flex justify-center gap-2 flex-wrap">
                <h1 className="text-center text-xl w-full">Rating And Reviews</h1>
              {
                data.reviews.map((e)=>(<Reviews key={nanoid()} review={e} />))
              }

           </div>
         <br /> <br />


        </div>
      </section>
    </>
  );
};

export default ShowPage;
