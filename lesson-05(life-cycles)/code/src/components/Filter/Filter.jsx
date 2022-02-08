import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ filterOptions }) => {
  return (
    <aside className={s.filter}>
      <h2 className={s.filterTitle}>Производитель</h2>
      <ul className={s.list}>
        {filterOptions.map(({ id, title }) => {
          return (
            <li key={id} className={s.item}>
              <input
                className={s.input}
                name="filter"
                value={id}
                type="checkbox"
                id={id}
              />
              <label className={s.label} htmlFor={id}>
                <span className={s.labelContent}>{title}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </aside>
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
