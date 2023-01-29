import React from "react";
import { useState, useEffect } from "react";

const checkout = (cartItems) => {

  const [totalPrice, setTotalPrice] = useState(0);
  console.log(cartItems.cartItems)
  useEffect(() => {
    if(cartItems.length > 0){
        setTotalPrice(
          cartItems.cartItems.reduce((price, item) => price + item.amount * item.price, 0)
        );
      }
  }, [cartItems]);


  return (
    <div className="checkout">
      <h2>Total Price : {totalPrice} </h2>
    </div>
  );
};

export default checkout;
