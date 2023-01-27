import Navbar from "./components/Navbar";
// import Card from './components/card';
import Data from "./components/data";
import Routes from "./components/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {
  const { productItems } = Data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    console.log("Btn ta thicexa");
    // const productExist = cartItems.find((item) => item.id === product.id);
    const productExist = true;
    if (productExist) {
      setCartItems(
        cartItems.map((item) => item.id === product.id)
          ? { ...productExist, quantity: productExist.quantity + 1 }
          : product
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  return (
    <div>
      <Router>
        <Navbar />
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
        />
      </Router>
      {/* <Card /> */}
    </div>
  );
}

export default App;
