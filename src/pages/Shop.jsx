// Shop page — all products with filter + sort
import { useEffect, useMemo, useState } from "react";
import FilterBar from "../components/FilterBar/FilterBar";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import products from "../data/products";
import styles from "./Shop.module.css";

const Shop = () => {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  // useEffect — scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = useMemo(() => {
    let list = category === "All" ? [...products] : products.filter((p) => p.category === category);
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    else if (sort === "high") list.sort((a, b) => b.price - a.price);
    else if (sort === "rated") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, sort]);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Shop All</h1>
      <p className={styles.sub}>{filtered.length} products available</p>
      <FilterBar category={category} setCategory={setCategory} sort={sort} setSort={setSort} />
      <ProductGrid products={filtered} />
    </div>
  );
};

export default Shop;
