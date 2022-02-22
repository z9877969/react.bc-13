import { useDispatch, useSelector } from "react-redux";
// import { changeSelect } from "../../redux/todos/todosActions";
import { changeSelect } from "../../redux/todos/todosSlice";
import { todoFilterOptions as PRIORITY } from "../../data/todoFilterOptions";
import { getTodosFilter } from "../../redux/todos/todosSelectors";

const SelectPriority = () => {
  const dispatch = useDispatch();

  const value = useSelector(getTodosFilter);

  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>Filter priority:</h3>
      <select
        onChange={(e) => dispatch(changeSelect(e.target.value))}
        name="priority"
        value={value}
      >
        <option value="all">ALL</option>
        <option value={PRIORITY.HIGH}>HIGH</option>
        <option value={PRIORITY.MEDIUM}>MEDIUM</option>
        <option value={PRIORITY.LOW}>LOW</option>
      </select>
    </div>
  );
};

export default SelectPriority;
