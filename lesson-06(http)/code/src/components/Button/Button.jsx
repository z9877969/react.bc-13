import s from "./Button.module.css";

const Button = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={s.btn} type="button">
      More
    </button>
  );
};

export default Button;
