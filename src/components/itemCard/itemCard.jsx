import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../button/button";
import styles from "./itemCard.module.css";

function ItemCard(props) {
  const [count, setCount] = useState(props.count);
  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const getItem = () => {
    const entry = { name: props.name, count: Number(count), src: props.src };
    props.callItem(entry);
  };

  return (
    <main className={styles.item}>
      <div className={styles.details}>
        <img className={styles.img} src={props.src} alt={props.alt} />
        <h2>{props.name}</h2>
      </div>
      <div className={styles.functions}>
        <input
          type="number"
          name="itemCount"
          value={count}
          onChange={handleChange}
        />
        <Button handleClick={getItem} name="Add to Cart" />
      </div>
    </main>
  );
}

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  src: PropTypes.element,
  callItem: PropTypes.func,
  alt: PropTypes.string
};

export default ItemCard;
