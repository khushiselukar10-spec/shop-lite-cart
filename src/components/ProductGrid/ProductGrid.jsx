// ProductGrid.jsx — List Rendering of ProductCards
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ products }) => {
  // Conditional Rendering — empty state
  if (!products || products.length === 0) {
    return <div className={styles.empty}>No products match your filters.</div>;
  }

  return (
    <div className={styles.grid}>
      {/* List Rendering with .map() */}
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
};

export default ProductGrid;
