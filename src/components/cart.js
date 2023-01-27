import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const Cart = ({cartItems,handleAddProduct,handleMinusProduct}) => {
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
              <div className="items-function">
                <button className="items-add" onClick={() => handleAddProduct(item)}>+</button>
                <button className="items-minus" onClick={() => handleMinusProduct(item)}>-</button>
              </div>

            </div>
          })}
        </div>
      
    </div>
  );
};

export default Cart;