// Toast.jsx — notification popup when item is added
import styles from "./Toast.module.css";
import { useCart } from "../../context/CartContext";

const Toast = () => {
  const { toast } = useCart();
  // Conditional Rendering — only when toast message exists
  if (!toast) return null;
  return (
    <div className={styles.toast} role="status" aria-live="polite">
      <span className={styles.icon}>✓</span>
      {toast}
    </div>
  );
};

export default Toast;
