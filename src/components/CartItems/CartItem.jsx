import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../button/button";
import styles from "./CartItem.module.css";

function CartItem(props) {
  const [count, setCount] = useState(props.count);
  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const getItem = () => {
    props.deleteItem(props.name);
  };

  return (
    <main className={styles.item}>
      <div className={styles.details}>
        <img className={styles.img} src={props.src} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
      <div className={styles.functions}>
        <input
          className={styles.input}
          type="number"
          name="itemCount"
          value={count}
          onChange={handleChange}
        />
        <Button handleClick={getItem} name="Delete" />
      </div>
    </main>
  );
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  deleteItem: PropTypes.func,
  src: PropTypes.element
};

export default CartItem;
