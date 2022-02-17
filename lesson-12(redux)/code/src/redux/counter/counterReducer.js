const counterReducer = (state = 50, action) => {
  switch (action.type) {
    case "counter/plus":
      return state + action.payload;
    case "counter/minus":
      return state - action.payload;
    case "counter/reset":
      return action.payload;
    default:
      return state;
  }
};

export default counterReducer;
