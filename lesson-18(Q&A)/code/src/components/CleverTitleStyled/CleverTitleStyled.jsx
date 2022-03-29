import { useEffect, useRef, useState } from "react";
import { BtnChange, BtnClick, Title, Value } from "./CleverTitleStyled.styled";

const CleverTitle = () => {
  const [isGreen, setIsGreen] = useState(true);
  const [value, setValue] = useState(0);

  const titleRef = useRef(null);
  const bgCounterRef = useRef(0);
  // let bgCounter = 0; - принимает значение 0 на каждом рендере -> нужно использовать useRef.current

  const handleChangeBg = () => setIsGreen((prevIsGreen) => !prevIsGreen);

  const handleClick = () => {
    setValue((prevValue) => prevValue + 1);
  };

  // useEffect(() => {
  //   console.log("titleRef.current_useEffect :>> ", titleRef.current);
  // }, []);

  // console.log("titleRef.current :>> ", titleRef.current);

  useEffect(() => {
    bgCounterRef.current += 1;
  }, [isGreen]);

  return (
    <>
      <Title ref={titleRef} isGreen={isGreen}>
        CleverTitleStyled
      </Title>
      <h2>Bg counter - {bgCounterRef.current}</h2>
      <BtnChange onClick={handleChangeBg}>Change BG</BtnChange>
      <Value>{value}</Value>
      <BtnClick onClick={handleClick}>Click</BtnClick>
    </>
  );
};

export default CleverTitle;
