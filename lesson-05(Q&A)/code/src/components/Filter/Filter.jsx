import PropTypes from "prop-types";
import s from "./Filter.module.css";

// filterStatus -> {apple: false, zte: false, ...}

const Filter = ({ filterOptions, filterStatus, changeFilterStatus }) => {
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
                checked={filterStatus[id]} // id -> apple || zte ||
                onChange={changeFilterStatus}
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

// const obj = {
//   a: 654
// }

// obj.a

// obj["a"]

// const key = "a"

// obj[key]
