import { useDispatch, useSelector } from "react-redux";
import { changeSelect } from "../../redux/todos/todosActions";
import { todoFilterOptions as PRIORITY } from "../../data/todoFilterOptions";

const SelectPriority = () => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.todos.filter);

  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>Filter priority:</h3>
      <select
        onChange={(e) => dispatch(changeSelect(e))}
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
