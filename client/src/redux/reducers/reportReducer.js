const initState = {
  items: [],
  category: ''
};

const reportReducer = (state = initState, action) => {
  switch (action.type) {
    case "REPORT_ITEMS": {
      return {
        ...state,
        items: action.payload
      }
    }
    case "REPORT_CATEGORY": {
      return {
        ...state,
        category: action.payload
      }
    }
    default:
      return state;
  }
};

export default reportReducer;
