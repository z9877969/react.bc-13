import { NavLink } from "react-router-dom";

const btnStyle = {
  width: "600px",
  margin: "0 auto",
  padding: "15px 0",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "lightblue",
};

const AuthNav = () => {
  return (
    <>
      <NavLink
        className="link"
        exact
        to="/login"
        style={btnStyle}
        activeStyle={{ color: "red" }}
      >
        Login
      </NavLink>
      <NavLink
        className="link"
        to="/register"
        style={btnStyle}
        activeStyle={{ color: "red" }}
      >
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;
