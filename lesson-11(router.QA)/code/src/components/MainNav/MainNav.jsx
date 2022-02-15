import { NavLink } from "react-router-dom";

const navStyles = {
  width: "600px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "lightblue",
};

const MainNav = () => {
  return (
    <nav style={navStyles}>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/"
        exact
        style={{ fontSize: "36px" }}
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/counter"
        style={{ fontSize: "36px" }}
      >
        Counter
      </NavLink>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/news"
        style={{ fontSize: "36px" }}
      >
        News
      </NavLink>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/gallery"
        style={{ fontSize: "36px" }}
      >
        Gallery
      </NavLink>
    </nav>
  );
};

export default MainNav;
