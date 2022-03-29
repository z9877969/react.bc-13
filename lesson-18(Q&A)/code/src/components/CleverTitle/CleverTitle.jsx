import { useState } from "react";
import s from "./CleverTitle.module.css";

const CleverTitle = () => {
  const [isGreen, setIsGreen] = useState(true);
  const [value, setValue] = useState(0);
  // const [items, setItems] = useState([]);

  const handleChangeBg = () => setIsGreen((prevIsGreen) => !prevIsGreen);

  const handleClick = () => {
    setValue((prevValue) => prevValue + 1);
  };

  // const addItem = (item) => setItems((prev) => [...prev, item]);

  return (
    <>
      <h1 className={isGreen ? s.title : s.red}>CleverTitle</h1>
      <button className={s.btn} type="button" onClick={handleChangeBg}>
        Change BG
      </button>
      <h2>{value}</h2>
      <button className={s.btn} type="button" onClick={handleClick}>
        Click
      </button>
    </>
  );
};

export default CleverTitle;
