// Navbar.jsx — sticky nav with logo, links, cart icon w/ count badge
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { totalItems, setDrawerOpen } = useCart();

  // List Rendering — nav links rendered via .map()
  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/shop", label: "Shop" },
    { to: "/cart", label: "Cart" },
  ];

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Shop<span>Spark</span>
        </Link>

        <nav className={styles.links}>
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={styles.cartBtn}
          onClick={() => setDrawerOpen(true)}
          aria-label="Open cart"
        >
          🛒
          {/* Conditional Rendering — show badge only if items exist */}
          {totalItems > 0 && <span className={styles.count}>{totalItems}</span>}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
