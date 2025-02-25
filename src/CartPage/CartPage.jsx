import NavBar from "../components/Navbar/NavBar";
import CartItem from "../components/cartItem/cartItem";


function CartPage () {
	return (
		<div id="container">
			<NavBar />
            <h2>Shopping Cart</h2>
			<div className="store-content">
				<CartItem name="item1" count={1} handleClick={()=>{}} />
				<CartItem name="item2" count={1} handleClick={()=>{}} />
				<CartItem name="item3" count={1} handleCLick={()=>{}} />
			</div>
		</div>
	)
}

export default CartPage