import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";


function Navbar() {
  return (
    <div className="navbar">
        <h1>
          <Link to="/" className="logo">
            Ecommerce
          </Link>
        </h1>
      
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
        
          <li>
            <Link to="/cart">
              <AiOutlineShoppingCart />
            </Link>
          </li>
        
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
