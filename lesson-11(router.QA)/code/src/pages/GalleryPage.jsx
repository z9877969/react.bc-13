import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import qs from "query-string";
import { getGallery } from "../utils/galleryApi";
import Form from "../components/Form/Form";
import ImagesList from "../components/ImagesList/ImagesList";

const GalleryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const search = qs.parse(location.search);

  const { query } = search;

  const [gallery, setGallery] = useState([]);

  const setSearch = (input) => {
    navigate({ pathname: "/gallery", search: "?query=" + input }); // {pathname: ""/gallery, search: "?query=cat", hash: "#eruyiu", state: undefined}
  };

  useEffect(() => {
    query && getGallery(query).then((images) => setGallery(images));
  }, [query]);

  return (
    <>
      <Form cbOnSubmit={setSearch} />
      <ImagesList gallery={gallery} />
    </>
  );
};

export default GalleryPage;

