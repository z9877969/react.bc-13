import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/auth/authSlice";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";

const navStyles = {
  // width: "600px",
  margin: "0 auto",
  padding: "15px 0",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "lightblue",
};
const btnStyle = {
  width: "600px",
  margin: "0 auto",
  padding: "15px 0",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "lightblue",
};

const MainNav = ({ isAuth }) => {
  const dispatch = useDispatch();

  return (
    <header>
      <nav style={navStyles}>
        <NavLink to="/news" style={btnStyle} activeStyle={{ color: "red" }}>
          News
        </NavLink>
        {isAuth ? <UserNav /> : <AuthNav />}
      </nav>
      {isAuth && (
        <button type="button" onClick={() => dispatch(logOut())}>
          LogOut
        </button>
      )}
    </header>
  );
};

export default MainNav;
