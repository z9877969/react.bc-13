import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 15px;
  background-color: deepskyblue;

  .header-logo {
    display: block;
    height: 70px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  .header-user-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    border: 1px solid #212121;
    border-radius: 50%;
    font-size: 30px;
  }

  .header-user-email {
    font-size: 24px;
  }
`;

export const BtnCartStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-left: 40px;
  padding: 10px;
  border: none;
  background: none;
  transform: scale(1);

  :active {
    transform: scale(0.8);
    transition: transform 1s linear;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: midnightblue;
  }
`;
