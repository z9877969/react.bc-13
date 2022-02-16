import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useLocation,
  useParams,
  Route,
  Outlet,
} from "react-router-dom";
import { getSingleImage } from "../../utils/galleryApi";
import { getTitle } from "../ImagesList/ImagesList";

const SingleImage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageId } = useParams();
  const [image, setImage] = useState(null);

  const handleGoBack = () => {
    navigate(location.state?.from);
    // history.push(location.state.from);
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
        to={"questions"} // /gallery/6546546 + /questions
        state={location.state} // locationGallery { from: location }
      >
        Questions
      </Link>
      <Link
        to={"comments"}
        state={location.state} // locationGallery
      >
        Comments
      </Link>
      {/* <Route path="questions" element={<h2>Questions</h2>} />
      <Route path="comments" element={<h2>Comments</h2>} /> */}
      <Outlet />
    </>
  ) : null;
};

export default SingleImage;
