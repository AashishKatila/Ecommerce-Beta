import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./products.js";
import Cart from "./cart.js";

const Routes = ({productItems,cartItems,handleAddProduct,handleMinusProduct}) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" >
          <Products productItems={productItems} handleAddProduct={handleAddProduct} />
        </Route>
        <Route exact path="/cart" >
          <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleMinusProduct={handleMinusProduct} />
        </Route>
      </Switch>
      {/* <Routes>
        <Route path="/" element={<Products productItems={productItems} />} />
      </Routes> */}
      {/* <Products productItems={productItems} /> */}
    </div>
  );
};

export default Routes;