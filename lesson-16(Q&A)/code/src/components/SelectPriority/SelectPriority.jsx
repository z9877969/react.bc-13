import { useDispatch, useSelector } from "react-redux";
import { changeSelect } from "../../redux/todos/todosSlice";
import { todoFilterOptions as PRIORITY } from "../../data/todoFilterOptions";
import { getTodosFilter } from "../../redux/todos/todosSelectors";
import { getLang } from "../../redux/lang/langSelectors";
import { langOptions } from "../../assets/options/langOptions";

const SelectPriority = () => {
  const dispatch = useDispatch();

  const value = useSelector(getTodosFilter);
  const lang = useSelector(getLang);

  const { title, options } = langOptions.selectPriorityOptions;

  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>{title[lang]}</h3>
      <select
        onChange={(e) => dispatch(changeSelect(e.target.value))}
        name="priority"
        value={value}
      >
        <option value="all">{options[lang].all}</option>
        <option value={PRIORITY.HIGH}>{options[lang].high}</option>
        <option value={PRIORITY.MEDIUM}>{options[lang].medium}</option>
        <option value={PRIORITY.LOW}>{options[lang].low}</option>
      </select>
    </div>
  );
};

export default SelectPriority;