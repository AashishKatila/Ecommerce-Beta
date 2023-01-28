import Navbar from "./components/Navbar";
// import Card from './components/card';
import Data from "./components/data";
import Routes from "./components/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {
  const { productItems } = Data;
  const [warning,setWarning] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const handleAddProduct = (item) =>{
    console.log("Btn ta thichiyo");
    // let isPresent = false;
    // cartItems.forEach((product) =>{
    //   if(item.id === product.id){
    //     isPresent = true
    //   }
    // })
    // if (isPresent){
		// 	setWarning(true);
		// 	setTimeout(()=>{
		// 		setWarning(false);
		// 	}, 2000);
		// 	return ;
		// }
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
        />
      </Router>
      {/* <Card /> */}
    </div>
  );
}

export default App;
