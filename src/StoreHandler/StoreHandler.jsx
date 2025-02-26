import { useState } from "react";
import HomePage from "../HomePage/HomePage";
import StorePage from "../StorePage/StorePage";
import CartPage from "../CartPage/CartPage";
import NavBar from "../components/Navbar/NavBar";
import { Route, Routes } from "react-router-dom";


function StoreHandler() {
  const [total, setTotal] = useState(0);
  const [cart, SetCart] = useState([]);

  const callItem = (entry) => {
    const newCart = [...cart];
    console.log(entry);
    if (cart.length === 0) {
      newCart.push(entry);
      SetCart(newCart);
      setTotal((prev) => prev + entry.count);
      console.log(entry.count);
      console.log(total);
    } else {
      //Check if item already in cart, add count if true, add item if false
      if (newCart.some((item) => item.name === entry.name)) {
        newCart.map((cartItem) => {
          if (cartItem.name === entry.name) {
            cartItem.count += entry.count;
            setTotal((prev) => prev + entry.count);
            console.log(entry.count);
            console.log(total);
            SetCart(newCart);
          }
        });
      } else {
        newCart.push(entry);
        SetCart(newCart);
        setTotal((prev) => prev + entry.count);
        console.log(entry.count);
        console.log(total);
        console.log(cart);
      }
    }
  };

  return (
    <>
      <NavBar total={total} />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage callItem={callItem} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>
      </div>
    </>
  );
}

export default StoreHandler;
