import { useState } from "react";
import s from "./Form.module.css";

const Form = ({ cbOnSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    cbOnSubmit(input);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        value={input}
        placeholder="Search..."
        onChange={handleChange}
      />
      <button disabled={!input.length} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
