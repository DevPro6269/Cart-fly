import React from "react";
import { useSelector } from "react-redux";
import { ItemandPrice } from "./ItemandPrice";
import getPrice from "../../Helper/getPrice";
import CartItem from "./CartItem";

const ItemCart = () => {
  let cart = useSelector((state) => state.cart.item);

  if (!cart.length > 0) {
    return <div>No Products Avialable</div>;
  }
  
  let price = Math.floor(cart.reduce((acc, curr) => (curr.price*curr.quantity) + acc, 0));
  let actual_price = getPrice(cart);
  let discount = Math.floor(((actual_price - price) * 100) / actual_price);
  return (
    <>
      <section className="container  flex gap-5 mx-auto">


         {/* individual Cart item  */}

        <div className="w-3/5 flex flex-col gap-1 ">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>



        {/* Price details  */}
        <div className="w-1/3 p-2 h-fit flex flex-col sticky top-16 gap-3 border-2">
          <h1 className="text-xl text-slate-600">Price details </h1>
          <hr />

          <ItemandPrice
            name={`Price (${cart.length} items)`}
            price={actual_price}
          />

          <ItemandPrice name={`Discount`} price={`${discount}%`} />

          <ItemandPrice name={"Buy more & save more"} price={100} />

          <ItemandPrice name={"Delivery Charges"} price={"free"} />

          <hr />

          <div className="flex font-bold text-xl justify-between">
            <h1>Total Price</h1>
            <h1>{price}</h1>
          </div>

          <hr />
          <h1 className="text-green-600 text-xl">
            You will save &#8377;{actual_price - price} on this order{" "}
          </h1>
        </div>
      </section>
    </>
  );
};

export default ItemCart;
