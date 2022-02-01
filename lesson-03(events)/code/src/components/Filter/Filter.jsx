import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ filterOptions }) => {
  return (
    <div className={styles.filter}>
      <h2 className={styles.filterTitle}>Производитель</h2>
      <ul className={styles["filter-list"]}>
        {filterOptions.map(({ id, title }) => {
          return (
            <li key={id} className={styles["filter-item"]}>
              <input
                className={styles["filter-input"]}
                name="filter"
                value={id}
                type="checkbox"
                id={id}
              />
              <label className={styles["filter-label"]} for={id}>
                <span className={styles["filter-label-content"]}>{title}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Filter.propTypes = {
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Filter;
