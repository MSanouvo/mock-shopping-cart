import Banner from "../assets/clothes-line.jpg";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.banner} src={Banner} alt="store banner" />
        <main className={styles.message}>
          <p>Welcome to my mock digital storefront!</p>
          <p className={styles.text}>
            Here you can shop for items by adding them to your cart and
            completing your transaction. You can begin by pressing on shop in
            the top right corner to see the store page. Once items have been
            added to the cart you can click on the cart icon to see them
            displayed there. If you change your mind about an item you can
            always delete it from the cart befor completing your transaction.
          </p>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
