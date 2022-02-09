import { Component } from "react";
import TodoForm, { priority as PRIORITY } from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import todosDB from "../../data/todo.json";
import s from "./Todo.module.scss";

class Todo extends Component {
  state = {
    todos: [], // []
    priority: "all",
  };

  componentDidMount() {
    const todosFromLS = JSON.parse(localStorage.getItem("todos")) || [];
    this.setState({ todos: todosFromLS });
  }

  getSnapshotBeforeUpdate() {
    return document.body.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
    if (prevState.todos !== this.state.todos) {
      window.scrollTo({
        top: snapshot - 200,
        behavior: "smooth",
      });
    }
  }

  addTodo = (todo) => {
    this.setState((prev) => ({
      todos: [
        ...prev.todos,
        todo,
        // todo,
        // todo,
        // todo,
        // todo,
        // todo,
        // todo,
        // todo,
        // todo,
        // todo,
        // todo,
        // todo,
      ],
    }));
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
    console.log("RENDER_TODO");
    const { priority } = this.state;
    return (
      <div className={s["container"]}>
        <select
          onChange={this.handleSelect}
          name="priority"
          value={this.state.priority}
        >
          <option value="all">ALL</option>
          <option value={PRIORITY.HIGH}>HIGH</option>
          <option value={PRIORITY.MEDIUM}>MEDIUM</option>
          <option value={PRIORITY.LOW}>LOW</option>
        </select>
        <TodoForm addTodo={this.addTodo} priority={priority} />
        <ToDoList
          items={this.getFilterTodos()}
          changeIsDone={this.changeIsDone}
          removeTodo={this.removeTodo}
        />
        {/* <button
          type="button"
          onClick={() =>
            this.addTodo({
              title: "Title",
              descr: "descr",
              priority: "low",
              id: "987987",
            })
          }
        >
          Click
        </button> */}
      </div>
    );
  }
}

export default Todo;
