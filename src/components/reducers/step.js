const step = (state = 0, action) => {
  switch (action.type) {
    case "one":
      return state + 1;
    case "two":
      return state + 1;
    case "three":
      return state + 1;
    default:
      return state;
  }
};
export default step;
