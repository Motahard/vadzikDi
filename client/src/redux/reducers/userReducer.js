const initState = {
  user: null,
  loading: false
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.payload
      }
    }
    default:
      return state;
  }
};

export default userReducer;
