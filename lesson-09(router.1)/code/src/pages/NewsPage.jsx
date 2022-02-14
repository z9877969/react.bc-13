import { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";
import {
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import NewsList from "../components/NewsList/NewsList";
import { getNews } from "../utils/newsApi";

const NewsPage = () => {
  // const history = useHistory();
  // const location = useLocation();
  // const match = useRouteMatch();

  //   console.log("history :>> ", history);
  //   console.log("location :>> ", location);
  //   console.log("match :>> ", match);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("some");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeSearch = (search) => {
    setSearch(search);
    setPage(1);
    setNews([]);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const addNews = () => {
      setIsLoading(false);
      setError(null);
      getNews(search, page)
        .then((news) => setNews((prev) => [...prev, ...news]))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    };

    addNews();
  }, [page, search]);

  return (
    <>
      <Form changeSearch={changeSearch} />
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <NewsList news={news} />
          {isLoading ? (
            <Watch heigth="50" width="50" color="red" />
          ) : (
            search && <Button handleLoadMore={handleLoadMore} />
          )}
        </>
      )}

    </>
  );
};

export default NewsPage;
