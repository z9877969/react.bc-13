import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/items/itemsOperations";
import { getItems } from "../../redux/items/itemsSelectors";

const ListItems = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.descr}</p>
          <button type="button" onClick={() => dispatch(removeItem(item.id))}>
            Del
          </button>
          <br />
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
