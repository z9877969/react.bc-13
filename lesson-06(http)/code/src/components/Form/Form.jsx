import { Component } from "react";
import s from "./Form.module.css";

class Form extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.input) return;
    this.props.changeSearch(this.state.input);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={this.state.input}
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <button disabled={!this.state.input.length} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
