import { useEffect, useState } from "react";
import s from "./Form.module.css";

const Form = ({ changeSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) return;
    changeSearch(input);
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

const Test = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch()
      .then((data) => setNews(data))
      .then(() => console.log(news));
  }, []);

  return <h1>Test</h1>;
};
