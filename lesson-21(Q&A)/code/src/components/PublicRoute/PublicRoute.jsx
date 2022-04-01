import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";

const PublicRoute = ({ path, children, isRestricted }) => {
  const isAuth = useSelector(getIsAuth);
  return isAuth && isRestricted ? (
    <Redirect to={"/todos"} />
  ) : (
    <Route path={path}>{children}</Route>
  );
};

export default PublicRoute;
