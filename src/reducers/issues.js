export default (state = {}, action) => {
  switch (action.type) {
    case "GET_ISSUES":
      state = action.payload;
      break;
    default:
      break;
  }
  return state;
};
