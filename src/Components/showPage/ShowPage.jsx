import React, { useEffect, useState } from "react";
import UseFetchData from "../../Hooks/UseFetchData";
import Reviews from "./Reviews";
import { useParams } from "react-router-dom";

const ShowPage = () => {
  let [hour, sethour] = useState(6);
  let [minute, setMinute] = useState(15);
  let [second, setSecond] = useState(59);

  let {id} = useParams();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond === 0) {
          setMinute((prevMinute) => {
            if (prevMinute === 0) {
              sethour((prevHour) => {
                if (prevHour === 0) {
                  clearInterval(interval);
                  return 0;
                } else {
                  return prevHour - 1;
                }
              });
              return 59;
            } else {
              return prevMinute - 1;
            }
          });
          return 59;
        } else {
          return prevSecond - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let { data, loading, error } = UseFetchData(
    `https://dummyjson.com/products/${id}`
  );

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.msg}</div>;
  }

  if (!data) {
    return <div>No Data Available</div>;
  }

  return (
    <>
      <section className="flex container gap-2 mx-auto">
        {/* left side div  */}
        <div className="w-fit ">
          <img
            src={data.images[0]}
            alt=""
            className="h-[600px] rounded-sm  w-[500px]"
          />
          <div className="w-full justify-center flex mb-2 gap-10">
            <button
              disabled
              className="p-2 w-2/5 rounded-md bg-blue-300 disabled:cursor-not-allowed text-lg"
            >
              Buy Now
            </button>
            <button className="p-2 w-2/5 rounded-md bg-orange-400 text-lg">
              {" "}
              <i className="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        </div>

        {/* right side div  */}
        <div className=" flex flex-col gap-5 overflow-auto h-full w-1/2">
          <div className="bg-orange-200 p-2">
            <h1 className="text-center text-base font-semibold">
              Republic Sale Will End in - {hour} hrs : {minute} min : {second}{" "}
              secs &nbsp; <i className="fa-solid fa-hourglass"></i>{" "}
            </h1>
          </div>
          <p className="text-slate-500 text-xl">{data.title}</p>

          {/* product description */}
          <h1 className="text-pretty font-serif font-medium ">{data.description}</h1>


          {/* Price details */}
          <h1 className="text-2xl font-bold">
            &#8377; {Math.floor(data.price)}{" "}
            <span className="line-through font-normal text-base">
              &#8377;123
            </span>{" "}
            <span className="text-base text-green-500">
              {" "}
              {Math.floor(data.discountPercentage)}% Off
            </span>{" "}
          </h1>

          <h1 className="text-orange-400">{data.availabilityStatus}</h1>

          <ul>
            <span className="font-medium">Other Informaation:</span>
            <li>weight: {Math.floor(data.weight)} K.G.</li>
            <li>Width: {Math.floor(data.dimensions.width)} cm.</li>
            <li>Height: {Math.floor(data.dimensions.height)} cm.</li>
            <li>Depth: {Math.floor(data.dimensions.depth)} cm.</li>
          </ul>

          {/* displaing product information */}
          <div className="flex justify-around p-4 ">
            <div className="flex flex-col gap-5">
              <i className="fa-solid self-center fa-rotate-left fa-2xl"></i>
              <h1>{data.returnPolicy}</h1>
            </div>

            <div className="flex flex-col gap-5">
              <i
                className="fa-solid self-center fa-truck-fast fa-2xl"
                style={{ color: "#a93d48" }}
              ></i>
              <h1>{data.shippingInformation}</h1>
            </div>

            <div className="flex flex-col gap-5">
              <i className="fa-solid self-center fa-award fa-2xl"></i>
              <h1>{data.warrantyInformation}</h1>
            </div>
          </div>

          {/* Displaying  rating and reviews */}

          <h1 className="text-center font-bold">
            {data.reviews.length}+ rating and reviews
          </h1>
          <div className="flex gap-2">
            {data.reviews.map((re) => (
              <Reviews key={re.data} review={re} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowPage;
