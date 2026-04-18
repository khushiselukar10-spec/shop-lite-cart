// FilterBar.jsx — category chips + sort dropdown
import styles from "./FilterBar.module.css";

const CATEGORIES = ["All", "Electronics", "Accessories", "Home", "Clothing", "Fitness"];
const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "low", label: "Price: Low → High" },
  { value: "high", label: "Price: High → Low" },
  { value: "rated", label: "Top Rated" },
];

const FilterBar = ({ category, setCategory, sort, setSort }) => {
  return (
    <div className={styles.bar}>
      <div className={styles.chips}>
        {/* List Rendering — categories rendered via .map() */}
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={`${styles.chip} ${category === c ? styles.active : ""}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className={styles.sortWrap}>
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          className={styles.select}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
