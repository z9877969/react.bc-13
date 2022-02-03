import { Component } from "react";
import TodoForm, { priority } from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import todosDB from "../../data/todo.json";
import s from "./Todo.module.scss";

class Todo extends Component {
  state = {
    todos: todosDB,
    priority: "all",
  };

  addTodo = (todo) => {
    this.setState((prev) => ({ todos: [...prev.todos, todo] }));
  };

  changeIsDone = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((el) =>
        el.id === id ? { ...el, isDone: !el.isDone } : el
      ),
    }));
  };

  handleSelect = (e) => {
    const { value } = e.target;
    this.setState({ priority: value });
  };

  getFilterTodos = () => {
    if (this.state.priority === "all") return this.state.todos;
    return this.state.todos.filter((el) => el.priority === this.state.priority);
  };

  removeTodo = (id) =>
    this.setState((prev) => ({
      todos: prev.todos.filter((el) => el.id !== id),
    }));

  render() {
    return (
      <div className={s["container"]}>
        <select
          onChange={this.handleSelect}
          name="priority"
          value={this.state.priority}
        >
          <option value="all">ALL</option>
          <option value={priority.HIGH}>HIGH</option>
          <option value={priority.MEDIUM}>MEDIUM</option>
          <option value={priority.LOW}>LOW</option>
        </select>
        <TodoForm addTodo={this.addTodo} />
        <ToDoList
          items={this.getFilterTodos()}
          changeIsDone={this.changeIsDone}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default Todo;
