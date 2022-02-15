import s from "./NewsList.module.css";
// import news from "../../data/news.json";
import Item from "../Item/Item";

// ({ news, openModal })

const NewsList = ({ news }) => {
  return (
    <>
      <h1
        style={{
          padding: "15px 0",
          textAlign: "center",
          margin: "5px 0",
          backgroundColor: "lightcoral",
        }}
      >
        Some News
      </h1>
      <ul className={s.news}>
        {news.map((item, idx) => (
          <Item item={item} key={idx} />
        ))}
      </ul>
    </>
  );
};

export default NewsList;
