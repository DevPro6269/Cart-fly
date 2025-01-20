import React from "react";
import { useDispatch } from "react-redux";
import { addtocart,removefromcart,decreaseQuantity } from "../../Store/Cartslice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();


function handlePlusclick(item){
 dispatch(addtocart(item))  
}

function handleDelete(id){  
  console.log(id);
    dispatch(removefromcart(id))
}





  return (
    <>
      <section className="flex w-full border-2 gap-3 ">
        {/* Cart item left side content */}
        <div className="h-44 flex flex-col border-2 w-44">
          <img className="h-full w-full" src={item.images[0]} alt="" />
        </div>

        {/* Cart item right side content */}

        <div className="flex flex-col gap-2 w-[450px] justify-center p-2">
          <h1 className="overflow-hidden">{item.description}</h1>
          <h1 className="text-green-400">{item.availabilityStatus}</h1>
          <h1>{item.category}</h1>
          <h1 className="text-slate-300">Free delivery</h1>

          <div className="flex  justify-between">
            <div className="border-yellow-400 self-center flex gap-3 border-2 rounded-lg w-fit px-4">
              <button onClick={()=>{dispatch(decreaseQuantity(item.id))}} className={`font-bold text-xl ${item.quantity>1?"":"hidden"} `}>-</button>
              <button onClick={()=>handleDelete(item.id)} className={` ${item.quantity>1?"hidden":"block"} `}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <span className="font-bold text-xl">{item.quantity}</span>
              <button onClick={()=>handlePlusclick(item)} className="font-bold text-xl">+</button>
            </div>

            <h1 className="font-semibold  "> Price: &#8377;{item.price}</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartItem;
