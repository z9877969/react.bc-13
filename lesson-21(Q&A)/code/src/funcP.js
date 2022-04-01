const arr = [];

const initialData = {
  a: "",
  b: [],
};

const createArr = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = "";
  }
  return arr;
};

createArr(5).map((el) => 32);

const fnA = (m) => {
  return m + 5;
};

const middleware = (store) => {
  return (next) => {
    return (action) => {
      next(action);
    };
  };
};

[1, 2, 3].map((el) => el);

const withClg = (WrappedComponent) => {
  console.log("object :>> ");

  return (props) => <WrappedComponent {...props} />;
};

const Comp = ({ title }) => {
  return <h1>{title}</h1>;
};

// const NewComp = withClg(Comp); // -> return () => <WrappedComponent />
// // const NewComp = (props) => <WrappedComponent {...props} />

// export default NewComp; // () => { return <h1>Comp</h1>;}
// // -> return () => <WrappedComponent />

export default withClg(Comp)

<>
  <NewComp titile={"Comp"} />
</>;
