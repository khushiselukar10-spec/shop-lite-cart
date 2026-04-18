// Home page — Hero + featured products
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import products from "../data/products";
import styles from "./Home.module.css";

const Home = () => {
  // Featured = items with badges (top 8 max)
  const featured = products.filter((p) => p.badge).slice(0, 8);

  return (
    <>
      <Hero />
      <section className={styles.section}>
        <div className={styles.head}>
          <div>
            <h2 className={styles.title}>Featured <em>Picks</em></h2>
            <p className={styles.sub}>Most-loved items from this season's lineup.</p>
          </div>
          <Link to="/shop" className={styles.viewAll}>View all products →</Link>
        </div>
        <ProductGrid products={featured} />
      </section>
    </>
  );
};

export default Home;
