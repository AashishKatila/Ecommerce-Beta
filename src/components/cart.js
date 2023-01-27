import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const Cart = ({cartItems}) => {
  return (
    <div className="cart-items">
      <div className="cart-header">
        Carts here
        </div>
        {cartItems.length === 0 && 
          <div className="cart-empty">No cart items added</div>
        }
        <div>
          {cartItems.map((item) =>{
            <div key={item.id} className="item-list" >
              <img className="item-image" src={item.image} alt={item.name} />
              <div className="item-name">{item.name}</div>
            </div>
          })}
        </div>
      
    </div>
  );
};

export default Cart;
