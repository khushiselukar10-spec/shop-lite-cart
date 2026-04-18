// ProductDetail page — single product view
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import products, { formatINR } from "../data/products";
import { useCart } from "../context/CartContext";
import Badge from "../components/Badge/Badge";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart, isInCart } = useCart();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  // Conditional Rendering — not found state
  if (!product) {
    return (
      <div className={styles.wrap}>
        <h2>Product not found</h2>
        <Link to="/shop" className={styles.back}>← Back to Shop</Link>
      </div>
    );
  }

  const inCart = isInCart(product.id);

  return (
    <div className={styles.wrap}>
      <Link to="/shop" className={styles.back}>← Back to Shop</Link>
      <div className={styles.grid}>
        <div className={styles.thumb}>
          <Badge label={product.badge} />
          {product.emoji}
        </div>
        <div>
          <span className={styles.cat}>{product.category}</span>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.rating}><strong>★ {product.rating.toFixed(1)}</strong> · 240+ reviews</div>
          <div className={styles.price}>{formatINR(product.price)}</div>
          <p className={styles.desc}>{product.desc}</p>
          <div className={styles.actions}>
            <button
              className={`${styles.add} ${inCart ? styles.added : ""}`}
              onClick={() => addToCart(product)}
            >
              {inCart ? "✓ Added to Cart" : "Add to Cart"}
            </button>
            <Link to="/cart" className={styles.ghost}>View Cart</Link>
          </div>
          <div className={styles.facts}>
            ✓ Free delivery on orders above ₹999<br />
            ✓ 7-day easy returns<br />
            ✓ Secure checkout · GST invoice provided
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
