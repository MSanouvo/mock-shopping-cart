import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../button/button";

function CartItem(props) {
    const [count, setCount] = useState(props.count)
    const handleChange = (e) => {
        setCount(e.target.value)
    }

  return (
    <main className="items">
      <h2>{props.name}</h2>
      <input
        type="number"
        name="itemCount"
        value={count}
        onChange={handleChange}
      />
      <Button name="Delete" />
    </main>
  );
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default CartItem;