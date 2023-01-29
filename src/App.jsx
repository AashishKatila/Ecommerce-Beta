import Navbar from "./components/Navbar";
import Data from "./components/data";
import Routes from "./components/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {
  const { productItems } = Data;
  const [cartItems, setCartItems] = useState([]);


  const handleAddProduct = (item) =>{
    console.log("Btn ta thichiyo");
		setCartItems([...cartItems, item]);
	}

  const handleChange = (item,d) =>{
    let ind = -1;
    cartItems.forEach((data,index) =>{
      if(data.id === item.id)
      ind = index
    })

    const temp = cartItems;
    temp[ind].amount += d;

    if(temp[ind].amount == 0){
      temp[ind].amount = 1;
    }
    setCartItems([...temp])
  }


  return (
    <div>
      <Router>
        <Navbar />
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleChange={handleChange}
          setCartItems={setCartItems}
        />
      </Router>
    </div>
  );
}

export default App;
