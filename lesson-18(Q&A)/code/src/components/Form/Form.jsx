import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/items/itemsOperations";
import { getIsLoadingItems } from "../../redux/items/itemsSelectors";

const Form = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoadingItems);

  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "descr":
        setDescr(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ title, descr }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="descr"
        placeholder="descr"
        value={descr}
        onChange={handleChange}
      />
      <button type="submit">Ok</button>
      {isLoading && <h3>Loading...</h3>}
    </form>
  );
};

export default Form;
