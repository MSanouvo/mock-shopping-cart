import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Cart from "../../assets/cart-icon-white.svg";

function NavBar() {
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
    </div>
  );
}

export default NavBar;
