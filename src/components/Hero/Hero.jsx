// Hero.jsx — full-width banner with heading + CTA
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>New Season · 2025</div>
        <h1 className={styles.title}>
          Discover <em>everyday</em> essentials,<br />
          curated with sparkle.
        </h1>
        <p className={styles.subtitle}>
          Hand-picked electronics, home goods, and lifestyle products —
          delivered free across India on orders over ₹999.
        </p>
        <div className={styles.actions}>
          <Link to="/shop" className={styles.cta}>Shop Now →</Link>
          <Link to="/shop" className={styles.ghost}>Browse Categories</Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}><strong>12+</strong><span>Curated Products</span></div>
          <div className={styles.stat}><strong>5★</strong><span>Customer Rated</span></div>
          <div className={styles.stat}><strong>Free</strong><span>Delivery ₹999+</span></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
