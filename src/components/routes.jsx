import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./products.jsx";
import Cart from "./cart.jsx";

const Routes = ({productItems,cartItems,handleAddProduct,warning}) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" >
          <Products productItems={productItems} handleAddProduct={handleAddProduct} />
          {
            warning && <div> Item already added</div>
          }
        </Route>
        <Route exact path="/cart" >
          <Cart cartItems={cartItems} handleAddProduct={handleAddProduct}  />
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
