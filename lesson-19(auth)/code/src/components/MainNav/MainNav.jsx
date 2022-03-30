import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";

const navStyles = {
  width: "600px",
  margin: "0 auto",
  padding: "15px 0",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "lightblue",
};

const MainNav = ({ isAuth }) => {
  return <nav style={navStyles}>{isAuth ? <UserNav /> : <AuthNav />}</nav>;
};

export default MainNav;
