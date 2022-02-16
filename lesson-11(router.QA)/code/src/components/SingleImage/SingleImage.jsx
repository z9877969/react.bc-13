import { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { getSingleImage } from "../../utils/galleryApi";
import { getTitle } from "../ImagesList/ImagesList";

const SingleImage = () => {
  const history = useHistory();
  const location = useLocation();
  const { imageId } = useParams();
  const [image, setImage] = useState(null);

  const handleGoBack = () => {
    history.push(location.state.from);
    // history.goBack();
    // history.go(-1);
  };

  useEffect(() => {
    imageId && getSingleImage(imageId).then(([image]) => setImage(image));
  }, [imageId]);

  // location.state -> {from -> location(gallerypage)}

  return image ? (
    <>
      <button type="button" onClick={handleGoBack}>
        GoBack
      </button>
      <img
        style={{
          width: "100%",
          display: "block",
          padding: "10px",
        }}
        src={image.largeImageURL}
        alt=""
      />
      <Link
        to={{
          pathname: "/gallery/" + imageId + "/questions",
          state: { from: location.state.from }, // locationGallery
        }}
      >
        Questions
      </Link>
      <Link
        to={{
          pathname: "/gallery/" + imageId + "/comments",
          state: { from: location.state.from },
        }}
      >
        Comments
      </Link>
      {/* <ul>
        {location.state?.gallery?.map((el, idx) => (
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
                state: {
                  from: location.state.from,
                  gallery: location.state?.gallery,
                },
              }}
            >
              <h3>{`${idx + 1}. ${getTitle(el.pageURL)}`}</h3>
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  ) : null;
};

export default SingleImage;
