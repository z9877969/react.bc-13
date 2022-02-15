import { Link } from "react-router-dom";
import s from "../NewsList/NewsList.module.css";

const Item = ({ item }) => {
  // const [isOpenModal, setIsOpenModal] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setIsOpenModal(true);
  // };

  return (
    <li className={s.item} onClick={null}>
      <Link to={`/news/${item.author}`}>
        <img className={s.img} src={item.urlToImage} alt="" />
        <div className={s.textWrapper}>
          <h3 className={s.title}>{item.title}</h3>
          <p className={s.author}>{item.author}</p>
          <p className={s.date}>{item.publishedAt}</p>
          <p className={s.descr}>{item.description}</p>
        </div>
      </Link>
      {/* {isOpenModal && (
          <>
            <h1>Modal</h1>
            <img src={item.urlToImage} alt="" />
          </>
        )} */}
    </li>
  );
};

export default Item;

// const Link = () => {

//     // logic
//     return <a href=""></a>
// }
