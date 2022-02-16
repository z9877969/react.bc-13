import capitalize from "lodash.capitalize";
import { Link, useLocation } from "react-router-dom";

export const getTitle = (textUrl) => {
  const title = textUrl
    .split("/")
    .slice(-2, -1)[0]
    .split("-")
    .slice(0, -1)
    .join(" ");
  return capitalize(title);
};

const ImagesList = ({ gallery }) => {
  const location = useLocation();
  return (
    <ul>
      {gallery.map((el, idx) => (
        <li key={el.id}>
          <Link
            style={{
              display: "inline-block",
              textDecoration: "none",
              color: "darkblue",
              fontSize: "18px",
              padding: "8px 0",
            }}
            to={{
              pathname: "/gallery/" + el.id,
              state: { from: location, // locationGallery || homePage
                // gallery 
            },
            }}
          >
            <h3>{`${idx + 1}. ${getTitle(el.pageURL)}`}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ImagesList;
