import PropTypes from "prop-types";
import {
  BtnCartStyled,
  HeaderStyled,
  NavStyled,
  UserInfoContainer,
} from "./Header.styled";
import logo from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";

const Header = ({ openCart, order }) => {
  return (
    <HeaderStyled>
      <img className="header-logo" src={logo} alt="header logo" />
      <UserInfoContainer>
        <span className="header-user-avatar">U</span>
        <span className="header-user-email">user@mail.com</span>
      </UserInfoContainer>
      <BtnCartStyled onClick={openCart}>
        <svg>
          <use href={sprite + "#icon-cart"}></use>
        </svg>
      </BtnCartStyled>
      ProdNum: {order.length}
    </HeaderStyled>
  );
};

Header.propTypes = {
  openCart: PropTypes.func.isRequired,
  order: PropTypes.array.isRequired,
};

export default Header;
