import {
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const ColoredBuildPage = () => {
  return (
    <div>
      <Link to={{ pathname: "/builds/yellow", state: { from: "location" } }}>
        YellowBuid
      </Link>
      <p></p>
      <Link to={{ pathname: "/builds/red", state: { from: "location" } }}>
        RedBuild
      </Link>
      <Route path={"/builds/:color"}>
        <ColoredBuildChildren />
      </Route>
    </div>
  );
};

export default ColoredBuildPage;

function ColoredBuildChildren() {
  const location = useLocation();
  const { color } = useParams();
  const { url, path } = useRouteMatch();

  return (
    <>
      <h1 style={{ backgroundColor: color }}>ColoredTitle</h1>
      <Link to={location.state?.from || "/builds"}>GoBack</Link>
      <h3>ColoredTitleElement</h3>
      <Link to={url + "/1"}>1</Link>
      {color !== "yellow" && <Link to={url + "/2"}>2</Link>}
      {color !== "yellow" && <Link to={url + "/3"}>3</Link>}
      <Switch>
        <Route path={path + "/1"}>
          <h2 style={{ backgroundColor: color }}>1 room</h2>
        </Route>
        <Route path={path + "/2"}>
          <h2 style={{ backgroundColor: color }}>2 room</h2>
        </Route>
        <Route path={path + "/3"}>
          <h2 style={{ backgroundColor: color }}>3 room</h2>
        </Route>
      </Switch>
    </>
  );
}
