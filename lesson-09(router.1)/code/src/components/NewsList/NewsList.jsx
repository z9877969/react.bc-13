import s from "./NewsList.module.css";
// import news from "../../data/news.json";
import Item from "../Item/Item";

// ({ news, openModal })

const NewsList = ({ news }) => {
  return (
    <>
      <ul className={s.news}>
        {news.map((item, idx) => (
          <Item item={item} key={idx} />
        ))}
      </ul>
    </>
  );
};

export default NewsList;
