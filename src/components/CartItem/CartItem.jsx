// CartItem.jsx — Functional Component with Props (item)
import styles from "./CartItem.module.css";
import { formatINR } from "../../data/products";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQty, removeFromCart } = useCart();

  return (
    <div className={styles.row}>
      <div className={styles.thumb}>{item.emoji}</div>
      <div className={styles.info}>
        <h4 className={styles.name}>{item.name}</h4>
        <span className={styles.cat}>{item.category}</span>
        <span className={styles.price}>{formatINR(item.price * item.qty)}</span>
      </div>
      <div className={styles.controls}>
        <div className={styles.qty}>
          <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease">−</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase">+</button>
        </div>
        <button className={styles.remove} onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
