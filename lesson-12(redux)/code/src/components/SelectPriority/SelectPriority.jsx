import { connect } from "react-redux";
import { changeSelect } from "../../redux/todos/todosActions";
import { todoFilterOptions as PRIORITY } from "../../data/todoFilterOptions";

const SelectPriority = ({ value, changeSelect }) => {
  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>Filter priority:</h3>
      <select
        onChange={(e) => changeSelect(e.target.value)}
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

const mapStateToProps = (state) => ({
  value: state.todos.filter,
});

const mapDispatchToProps = {
  changeSelect,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPriority);
