import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h1>
          <Link to="/" className="logo">
            Ecommerce
          </Link>
        </h1>
      </div>
      <div >
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
