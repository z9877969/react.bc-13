import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/lang/langActions";
import { getLang } from "../../redux/lang/langSelectors";

const navStyles = {
  width: "600px",
  margin: "0 auto",
  padding: "15px 0",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "lightblue",
};

const MainNav = () => {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);

  return (
    <nav style={navStyles}>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/counter"
        style={{ fontSize: "36px" }}
      >
        Counter
      </NavLink>
      <select
        onChange={(e) => dispatch(changeLang(e.target.value))}
        name="lang"
        value={lang}
      >
        <option value={"ua"}>UA</option>
        <option value={"en"}>EN</option>
      </select>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/todos"
        style={{ fontSize: "36px" }}
      >
        Todos
      </NavLink>
      <NavLink
        activeStyle={{ color: "green" }}
        to="/builds"
        style={{ fontSize: "36px" }}
      >
        Builds
      </NavLink>
    </nav>
  );
};

export default MainNav;
