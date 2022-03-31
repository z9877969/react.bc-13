import { NavLink } from "react-router-dom";

const UserNav = () => {
  return (
    <>
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
    </>
  );
};

export default UserNav;
