import { useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import { getGallery, getSingleImage } from "../utils/galleryApi";

const SingleImage = () => {
  const { imageId } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    imageId && getSingleImage(imageId).then(([image]) => setImage(image));
  }, [imageId]);

  return image ? <img src={image.largeImageURL} alt="" /> : null;
};

const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery().then((images) => setGallery(images));
  }, []);

  return (
    <>
      <ul>
        {gallery.map((el, idx) => (
          <li key={el.id}>
            <Link to={"/gallery/" + el.id}>
              <h3>{`${idx + 1}. ${el.user} ${el.tags}`}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <Route path="/gallery/:imageId">
        <SingleImage />
      </Route>
    </>
  );
};

export default GalleryPage;
