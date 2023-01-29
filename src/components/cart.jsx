import React from "react";
import "./cart.css";

const Cart = ({ cartItems, handleChange, setCartItems }) => {
  console.log(cartItems);

  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item.id !== id);
    console.log("handle Remove Clicked");
    setCartItems(arr);
  };

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
              <div className="row">
                <div className="all-items">
                  <div key={item.id} className="item-list">
                    <img
                      className="item-image"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="item-name">{item.name}</div>
                  </div>
                  <div className="cart-function">
                    <button
                      className="cart-add"
                      onClick={() => handleChange(item, +1)}
                    >
                      +
                    </button>
                    <span className="item-amount">{item.amount}</span>
                    <button
                      className="cart-remove"
                      onClick={() => handleChange(item, -1)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="item-total-remove">
                  <span className="item-price">${item.price}</span>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
