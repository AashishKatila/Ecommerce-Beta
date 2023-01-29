import React from "react";
import { useState, useEffect } from "react";
import './checkout.css'

const checkout = ({ cartItems, setCartItems }) => {
  const [finalPrice, setFinalPrice] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(cartItems)
  const handleDelete = () => {
    setCartItems([]);
  };

  const onOptionChange = (e) => {
    if (e.target.value === "cash") {
      setFinalPrice(200);
    } else {
      setFinalPrice(50);
    }
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      setTotalPrice(
        cartItems.reduce((price, item) => price + item.amount * item.price, 0)
      );
    }
  }, [cartItems]);

  return (
    <div className="checkout">
      <div>
        Payment Option:-
        <div className="options">
          <input
            type="radio"
            value="cash"
            name="payment"
            onChange={onOptionChange}
          />{" "}
          Cash on Delivery
          <input
            type="radio"
            value="advance"
            name="payment"
            onChange={onOptionChange}
          />{" "}
          Advance Payment
        </div>
      </div>
      {finalPrice ? (
        <div>
          Total Price : {totalPrice} + {finalPrice}{" "}
        </div>
      ) : (
        <></>
      )}
      <button onClick={() => handleDelete}>Checkout</button>
    </div>
  );
};

export default checkout;
