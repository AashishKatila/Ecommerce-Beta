import React from "react";
import "./cart.css";

const Cart = ({ cartItems, handleAddProduct }) => {
  return (
    <div className="cart-items">
      <div className="cart-header">
        Cart Items 
      </div>
      {cartItems.length === 0 && (
        <div className="cart-empty">No cart items added</div>
      )}
    
      <div>
        {cartItems.map((item) => {
          console.log(item.name);
          // <div key={item.id} className="item-list" >
          // <img className="item-image" src={item.image} alt={item.name} />
          // <div className="item-name">{item.name}</div>;
          <h2>{item.name}</h2>

          // </div>
        })}
      </div>
      </div>
    
  );
};

export default Cart;
