import {
  BtnCartStyled,
  HeaderStyled,
  UserInfoContainer,
} from "./Header.styled";
import logo from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <img className="header-logo" src={logo} alt="header logo" />
      <UserInfoContainer>
        <span className="header-user-avatar">U</span>
        <span className="header-user-email">user@mail.com</span>
      </UserInfoContainer>
      <BtnCartStyled>
        <svg>
          <use href={sprite + "#icon-cart"}></use>
        </svg>
      </BtnCartStyled>
    </HeaderStyled>
  );
};

export default Header;
