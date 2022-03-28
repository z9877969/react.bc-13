// import { Fragment } from "react";
import { useState } from "react";
import s from "./CleverTitle.module.css";

// const getTitleStyle = (isGreen) => ({
//   backgroundColor: isGreen ? "green" : "red",
//   width: "200px",
// });

// const titleStyles = { backgroundColor: "green" };

const CleverTitle = () => {
  const [isGreen, setIsGreen] = useState(true);
  const [value, setValue] = useState(0);

  const handleChangeBg = () => setIsGreen((prevIsGreen) => !prevIsGreen);

  const handleClick = () => {
    // setValue(value + 1); - так делать нельзя!!!
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <>
      {/* <h1 style={getTitleStyle(isGreen)}>CleverTitle</h1> */}
      {/* <h1 style={titleStyles}>CleverTitle</h1> */}
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
