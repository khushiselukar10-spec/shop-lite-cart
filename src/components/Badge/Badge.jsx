// Badge.jsx — Functional Component with Props (label: string)
import styles from "./Badge.module.css";

const Badge = ({ label }) => {
  // Conditional Rendering — only render when there is a label
  if (!label) return null;

  const variant =
    label === "New" ? styles.new
      : label === "Top Rated" ? styles.top
      : label === "Popular" ? styles.popular
      : "";

  return <span className={`${styles.badge} ${variant}`}>{label}</span>;
};

export default Badge;
