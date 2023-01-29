import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./products.jsx";
import Cart from "./cart.jsx";
import Checkout from "./checkout";

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleChange,
  setCartItems,
}) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route exact path="/cart">
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleChange={handleChange}
            setCartItems={setCartItems}
          />
        </Route>
        <Route exact path="/checkout">
          <Checkout cartItems={cartItems} setCartItems={setCartItems} />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
