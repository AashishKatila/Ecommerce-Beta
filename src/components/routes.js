import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./products.js";
import Cart from "./cart.js";

const Routes = ({productItems,cartItems,handleAddProduct}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products productItems={productItems} handleAddProduct={handleAddProduct} />
        </Route>
        <Route path="/cart" exact>
          <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />
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
