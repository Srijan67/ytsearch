const LoadAllVidoes = (
  state = {
    items: "",
  },
  action
) => {
  switch (action.type) {
    case "LOAD_VIDEO":
      return { ...state, items: action.data };
    default:
      return state;
  }
};
export default LoadAllVidoes;
