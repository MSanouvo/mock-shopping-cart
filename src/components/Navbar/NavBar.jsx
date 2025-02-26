import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Cart from "../../assets/cart-icon-white.svg";
import PropTypes from "prop-types";

NavBar.propTypes = {
  total: PropTypes.number
}

function NavBar(props) {
  return (
    <div className={styles.navBar}>
      <div className={styles.home}>
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/store">
          <h2>Shop</h2>
        </Link>
        <Link to="/cart">
          <button className={styles.button}>
            <img className={styles.icon} src={Cart} alt="cart icon" />
          </button>
        </Link>
      </div>
      {props.total != 0 && <p className={styles.count}>{props.total}</p>}
    </div>
  );
}

export default NavBar;
