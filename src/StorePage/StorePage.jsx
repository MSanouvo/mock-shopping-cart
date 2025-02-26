import NavBar from "../components/Navbar/NavBar";
import ItemCard from "../components/itemCard/itemCard";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./StorePage.module.css";

StorePage.propTypes = {
  callItem: PropTypes.func
}

function StorePage(props) {
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => setInventory(res.splice(0, 3)));
  }, []);

  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.store}>
        <header className={styles.heading}>Store</header>
        <div className={styles.items}>
          {inventory != null ? (
            inventory.map((item, index) => {
              return (
                <div key={index}>
                  <ItemCard
                    key={index}
                    name={item.title}
                    count={1}
                    callItem={props.callItem}
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              );
            })
          ) : (
            <p className={styles.message}>Loading items...</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default StorePage;
