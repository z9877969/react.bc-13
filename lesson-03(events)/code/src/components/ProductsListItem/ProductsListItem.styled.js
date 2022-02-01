import styled from "styled-components";

export const BtnBuyStyled = styled.button`
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  background-color: burlywood;
  color: ${(props) => (props.isSold ? "red" : "rgb(58, 44, 44)")};
  border-radius: 3px;

  /* .span {
    color: green;
  } */
`;
