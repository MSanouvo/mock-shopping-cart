import NavBar from "../components/Navbar/NavBar"
import Banner from "../assets/gunpla_banner.jpg"
import styles from "./HomePage.module.css"

function HomePage () {
    return (
        <div>
            <NavBar />
            {/* Could turn this into a component if we want to reuse it on the store page */}
            <img className={styles.banner} src={Banner} alt="store banner" />
            <main>Lorem Ipsum, ...</main>
        </div>
    )
}

export default HomePage