import NavBar from "../components/Navbar/NavBar";
import ItemCard from "../components/itemCard/itemCard";


function StorePage () {
	return (
		<div id="container">
			<NavBar />
            <h2>Store</h2>
			<div className="store-content">
				<ItemCard name="item1" count={1} handleClick={()=>{}} />
				<ItemCard name="item2" count={1} handleClick={()=>{}} />
				<ItemCard name="item3" count={1} handleCLick={()=>{}} />
			</div>
		</div>
	)
}

export default StorePage