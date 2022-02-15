import { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";
import NewsList from "../components/NewsList/NewsList";
import { getNews } from "../utils/newsApi";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const addNews = () => {
      setIsLoading(false);
      setError(null);
      getNews()
        .then((news) => setNews((prev) => [...prev, ...news]))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    };

    addNews();
  }, []);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {isLoading && <Watch heigth="50" width="50" color="red" />}
          <NewsList news={news} />
        </>
      )}
    </>
  );
};

export default NewsPage;
