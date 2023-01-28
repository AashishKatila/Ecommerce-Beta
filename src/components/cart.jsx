import React from "react";
import "./cart.css";

const Cart = ({ cartItems, handleChange }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-items">
      <div className="cart-header">Cart Items</div>
      {cartItems.length === 0 && (
        <div className="cart-empty">No cart items added</div>
      )}

      <div>
        {cartItems.map((item) => {
          console.log(item.name);
          return (
            <>
              <div key={item.id} className="item-list">
                <img className="item-image" src={item.image} alt={item.name} />
                <div className="item-name">{item.name}</div>
              </div>
              <div className="cart-function">
                <button
                  className="cart-add"
                  onClick={() => handleChange(item, +1)}
                >
                  +
                </button>
                <button>{item.amount}</button>
                <button
                  className="cart-remove"
                  onClick={() => handleChange(item, -1)}
                >
                  -
                </button>
              </div>
              <div>
                <span>{item.price}</span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
