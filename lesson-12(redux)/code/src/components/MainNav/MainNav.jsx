import { NavLink } from "react-router-dom";

const navStyles = {
  width: "600px",
  margin: "0 auto",
  padding: "15px 0",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "lightblue",
};

const MainNav = () => {
  return (
    <nav style={navStyles}>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/counter"
        style={{ fontSize: "36px" }}
      >
        Counter
      </NavLink>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/todos"
        style={{ fontSize: "36px" }}
      >
        News
      </NavLink>
    </nav>
  );
};

export default MainNav;
