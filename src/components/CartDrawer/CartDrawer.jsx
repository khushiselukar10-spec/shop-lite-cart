// CartDrawer.jsx — sliding cart panel from the right
import { Link } from "react-router-dom";
import styles from "./CartDrawer.module.css";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { formatINR } from "../../data/products";

const CartDrawer = () => {
  const { drawerOpen, setDrawerOpen, items, subtotal, deliveryFee, total } = useCart();

  return (
    <>
      <div
        className={`${styles.overlay} ${drawerOpen ? styles.overlayOpen : ""}`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.head}>
          <h3 className={styles.title}>Your Cart ({items.length})</h3>
          <button className={styles.close} onClick={() => setDrawerOpen(false)} aria-label="Close cart">✕</button>
        </div>

        <div className={styles.body}>
          {/* Conditional Rendering — empty cart state */}
          {items.length === 0 ? (
            <div className={styles.empty}>
              <span>🛍️</span>
              Your cart is empty.<br />Time to find something special!
            </div>
          ) : (
            // List Rendering
            items.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.foot}>
            <div className={styles.line}>
              <span>Subtotal</span>
              <span>{formatINR(subtotal)}</span>
            </div>
            <div className={styles.line}>
              <span>Delivery</span>
              <span>{deliveryFee === 0 ? "FREE" : formatINR(deliveryFee)}</span>
            </div>
            <div className={styles.total}>
              <span>Total</span>
              <span>{formatINR(total)}</span>
            </div>
            <Link to="/cart" className={styles.checkout} onClick={() => setDrawerOpen(false)}>
              Go to Checkout →
            </Link>
            {subtotal < 999 && (
              <div className={styles.freeNote}>
                Add {formatINR(999 - subtotal)} more for FREE delivery!
              </div>
            )}
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
