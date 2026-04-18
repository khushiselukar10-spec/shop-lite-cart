// Cart page — all cart items + checkout summary
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem/CartItem";
import { formatINR } from "../data/products";
import styles from "./Cart.module.css";

const Cart = () => {
  const { items, subtotal, deliveryFee, total, clearCart } = useCart();

  // Conditional Rendering — empty cart
  if (items.length === 0) {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Shopping Cart</h1>
        <div className={styles.empty}>
          <span>🛒</span>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/shop" className={styles.shopBtn}>Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Shopping Cart ({items.length})</h1>
      <div className={styles.grid}>
        <div>
          {/* List Rendering */}
          {items.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
        <aside className={styles.summary}>
          <h3 className={styles.sumTitle}>Order Summary</h3>
          <div className={styles.line}><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
          <div className={styles.line}><span>Delivery</span><span>{deliveryFee === 0 ? "FREE" : formatINR(deliveryFee)}</span></div>
          <div className={styles.line}><span>Tax (incl.)</span><span>—</span></div>
          <div className={styles.total}><span>Total</span><span>{formatINR(total)}</span></div>
          <button className={styles.checkout} onClick={() => { alert("Order placed! 🎉"); clearCart(); }}>
            Checkout · {formatINR(total)}
          </button>
          {subtotal < 999 ? (
            <div className={styles.note} style={{ color: "#e8572a" }}>
              Add {formatINR(999 - subtotal)} more for FREE delivery
            </div>
          ) : (
            <div className={styles.note}>🎉 You unlocked free delivery!</div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Cart;
