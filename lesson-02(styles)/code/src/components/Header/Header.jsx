import { HeaderStyled, UserInfoContainer } from "./Header.styled";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <img className="header-logo" src={logo} alt="header logo" />
      <UserInfoContainer>
        <span className="header-user-avatar">U</span>
        <span className="header-user-email">user@mail.com</span>
      </UserInfoContainer>
    </HeaderStyled>
  );
};

export default Header;
