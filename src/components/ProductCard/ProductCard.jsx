// ProductCard.jsx — Functional Component with Props
// Props: id, name, price, category, emoji, badge, rating, desc
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import Badge from "../Badge/Badge";
import { useCart } from "../../context/CartContext";
import { formatINR } from "../../data/products";

const ProductCard = ({ id, name, price, category, emoji, badge, rating, desc }) => {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(id);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, price, category, emoji, badge, rating, desc });
  };

  return (
    <Link to={`/product/${id}`} className={styles.card} style={{ animationDelay: `${(id % 6) * 60}ms` }}>
      <Badge label={badge} />
      <div className={styles.thumb}>{emoji}</div>
      <div className={styles.cat}>{category}</div>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.rating}>
        <strong>★ {rating.toFixed(1)}</strong> · {desc.slice(0, 38)}…
      </div>
      <div className={styles.row}>
        <span className={styles.price}>{formatINR(price)}</span>
        {/* Conditional Rendering — button label depends on cart state */}
        <button className={`${styles.btn} ${inCart ? styles.added : ""}`} onClick={handleAdd}>
          {inCart ? "✓ Added" : "Add to Cart"}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
