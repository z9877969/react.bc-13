import { useState } from "react";
import s from "./AuthForm.module.scss";

const AuthForm = ({ cbOnSubmit }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit(form);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Email </span>
        <input
          className={s.input}
          type="text"
          name="email"
          value={form.email}
          placeholder="Input email"
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Password </span>
        <input
          className={s.input}
          type="text"
          name="password"
          value={form.password}
          placeholder="Input password"
          onChange={handleChange}
        />
      </label>
      <button className={s.submit} type="submit">
        Ok
      </button>
      {/* {isLoading && <h3>Loading...</h3>} */}
    </form>
  );
};

export default AuthForm;
