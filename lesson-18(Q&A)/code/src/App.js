import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CleverTitle from "./components/CleverTitle/CleverTitle";
import Form from "./components/Form/Form";
import ListItems from "./components/ListItems/ListItems";
import { getItems } from "./redux/items/itemsOperations";

// === компонент высшего порядка/HOC - high order component/
// const MyComponent = (props) => {
//   return <h1>MyComponent</h1>;
// };

// const withClg = (Component, props) => {
//   console.log("props :>> ", props);
//   return <Component {...props} />;
// };

// const WrappedMyComponent = withClg(MyComponent); // -> (poprs) => {return <Component {...poprs} />}

// const withClg = (Component) => (props) => {
//   console.log("props :>> ", props);
//   return <Component {...props} />;
// };

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <>
      <CleverTitle />
      <Form />
      <ListItems />
      {/* <MyComponent /> */}
      {/* <WrappedMyComponent />
      {WrappedMyComponent({})} - то же, что и на строке выше*/}
      {/* // -> (poprs) => {return <Component {...poprs} />} */}
    </>
  );
};

export default App;

// === карирование
// const mid = (store) => (next) => (action) => {};

// const fnStore = mid(5);
// const fnNext = fnStore(true);

// const a = (n) => (m) => n + m;

// const d = (n) => {

//   return (m) => n + m;
// };

// === замыкание
// const o = () => {
//   let a = 0;

//   const changeA = (n) => (a += n);
//   const showA = () => console.log("a :>> ", a);

//   return { changeA, showA };
// };

// const o1 = o();
// const o2 = o();

// console.log(o1);

// o1.changeA(2);
// o2.changeA(4);

// o1.showA();
// o2.showA();
