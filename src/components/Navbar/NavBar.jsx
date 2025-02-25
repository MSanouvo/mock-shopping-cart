import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import Cart from "../../assets/cart-icon-white.svg"

function NavBar () {
    return (
        <div className={styles.navBar}>
            <Link to="/"><h1>Home</h1></Link>
            <Link to="/store"><h3>Shop</h3></Link>
            <Link to="/cart"><img className={styles.icon} src={Cart} alt="cart icon" /></Link>
        </div>
    )
}

export default NavBar