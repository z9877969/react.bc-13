import styled from "styled-components";

export const Title = styled.h1`
  background-color: ${(props) => (props.isGreen ? "green" : "red")};
  width: 200px;
`;

export const BtnChange = styled.button`
  background-color: yellow;
`;

export const BtnClick = styled.button`
  background-color: blue;
`;

export const Value = styled.h2``;
