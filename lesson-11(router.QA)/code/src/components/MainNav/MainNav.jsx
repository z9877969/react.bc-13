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
        to="/"
        exact="true"
        style={({ isActive }) =>
          isActive ? { fontSize: "36px", color: "green" } : { fontSize: "36px" }
        }
        
      >
        Home
      </NavLink>
      <NavLink
        to="/counter"
        style={({ isActive }) =>
          isActive ? { fontSize: "36px", color: "green" } : { fontSize: "36px" }
        }
      >
        Counter
      </NavLink>
      <NavLink
        to="/news"
        style={({ isActive }) =>
          isActive ? { fontSize: "36px", color: "green" } : { fontSize: "36px" }
        }
      >
        News
      </NavLink>
      <NavLink
        to="/gallery"
        style={({ isActive }) =>
          isActive ? { fontSize: "36px", color: "green" } : { fontSize: "36px" }
        }
      >
        Gallery
      </NavLink>
    </nav>
  );
};

export default MainNav;
