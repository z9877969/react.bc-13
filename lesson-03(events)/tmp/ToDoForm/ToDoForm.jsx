import { Component } from "react";
import { v4 } from "uuid";
import s from "./ToDoForm.module.scss";

const radio = {
  OPEN: "open",
  CLOSE: "close",
};

class ToDoForm extends Component {
  state = {
    title: "",
    descr: "",
    date: "2022-02-01",
    importanceStatus: {
      low: false,
      midle: false,
      high: false,
    },
  };

  //

  handleChange = (e) => {
    console.log("e :>> ", e);
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const trueLength = Object.values(this.state.importanceStatus).filter(
        (bool) => bool === true
      ).length;
      if (trueLength === 2 && checked === true) return;
      this.setState((prevState) => ({
        [name]: { ...prevState[name], [value]: checked },
      }));
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const item = { ...this.state, id: v4() };
    this.props.addToDo(item);
  };

  render() {
    const { importanceStatus } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Title </span>
          <input
            className={s.input}
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={this.state.descr}
            onChange={this.handleChange}
          />
        </label>
        <div class="labelWrapper">
          <label class="label radio">
            <span> Status close </span>
            <input
              class="input"
              type="radio"
              name="workStatus"
              value={radio.CLOSE}
              checked={radio.CLOSE === this.state.workStatus}
              onChange={this.handleChange}
            />
          </label>
          <label class="label radio">
            <span> Status open </span>
            <input
              class="input"
              type="radio"
              name="workStatus"
              value={radio.OPEN}
              checked={radio.OPEN === this.state.workStatus}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div class="labelWrapper">
          <label className={`${s.label} ${s.checkbox}`}>
            <span> quickly/important </span>
            <input
              className={s.input}
              type="checkbox"
              name="importanceStatus"
              checked={importanceStatus["quickly/important"]}
              value="quickly/important"
              onChange={this.handleChange} // cb(event)
            />
          </label>
          <label className={`${s.label} ${s.checkbox}`}>
            <span> quickly/NOTimportant </span>
            <input
              className={s.input}
              type="checkbox"
              name="importanceStatus"
              value="quickly/NOTimportant"
              onChange={this.handleChange}
              checked={importanceStatus["quickly/NOTimportant"]}
            />
          </label>
          <label className={`${s.label} ${s.checkbox}`}>
            <span> NOTquickly/important </span>
            <input
              className={s.input}
              type="checkbox"
              name="importanceStatus"
              value="NOTquickly/important"
              onChange={this.handleChange}
              checked={importanceStatus["NOTquickly/important"]}
            />
          </label>
          <label className={`${s.label} ${s.checkbox}`}>
            <span> NOTquickly/NOTimportant </span>
            <input
              className={s.input}
              type="checkbox"
              name="importanceStatus"
              value="NOTquickly/NOTimportant"
              onChange={this.handleChange}
              checked={importanceStatus["NOTquickly/NOTimportant"]}
            />
          </label>
        </div>
        <button type="submit">Ok</button>
      </form>
    );
  }
}

export default ToDoForm;

// const obj = {
//     a: 654
// }

// const prop = "title"

// obj.a
// obj["a"]
// obj[prop]
// const b = {[prop]: 654654}
