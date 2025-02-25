import NavBar from "../components/Navbar/NavBar";
import CartItem from "../components/cartItem/cartItem";
import { useState } from "react";
import styles from "./CartPage.module.css";
import Button from "../components/button/button";

CartPage.defaultProps = {
  cart: [],
};

function CartPage(props) {
  const [cart, setCart] = useState(props.cart);

  const deleteItem = (item) => {
    const newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].name === item) {
        newCart.splice(i, 1);
        setCart(newCart);
      }
    }
    console.log(cart);
  };
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.cart}>
        <header className={styles.heading}>Shopping Cart</header>
        {cart.length != 0 ? (
          cart.map((item, index) => {
            return (
              <div className={styles.cartItems}>
                <CartItem
                  key={index}
                  name={item.name}
                  count={item.count}
                  src={item.src}
                  deleteItem={deleteItem}
                />
              </div>
            );
          })
        ) : (
          <p className={styles.message}>Add items to cart</p>
        )}
      </main>
      <div className={styles.button}>
        {cart.length != 0 && <Button name={"Complete Transaction"} />}
      </div>
    </div>
  );
}

export default CartPage;
