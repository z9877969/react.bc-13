import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";
import { getGallery } from "../utils/galleryApi";
import Form from "../components/Form/Form";
import ImagesList from "../components/ImagesList/ImagesList";

const GalleryPage = () => {
  const history = useHistory();
  const location = useLocation();

  const search = qs.parse(location.search);

  const { query } = search;

  const [gallery, setGallery] = useState([]);

  const setSearch = (input) => {
    history.push({ pathname: "/gallery", search: "?query=" + input }); // {pathname: ""/gallery, search: "?query=cat", hash: "#eruyiu", state: undefined}
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

// ImagesList -->
// {/* <ul>
//   {gallery.map((el, idx) => (
//     <li key={el.id}>
//       <Link
//         style={{
//           display: "inline-block",
//           textDecoration: "none",
//           color: "darkblue",
//           fontSize: "18px",
//           padding: "8px 0",
//         }}
//         to={"/gallery/" + el.id}
//       >
//         <h3>{`${idx + 1}. ${getTitle(el.pageURL)}`}</h3>
//       </Link>
//     </li>
//   ))}
// </ul>; */}
