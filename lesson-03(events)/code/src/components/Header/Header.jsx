import {
  BtnCartStyled,
  HeaderStyled,
  NavStyled,
  UserInfoContainer,
} from "./Header.styled";
import logo from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <img className="header-logo" src={logo} alt="header logo" />
      <NavStyled>
        <button type="button">Shop</button>
        <button type="button">Todo</button>
      </NavStyled>
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
