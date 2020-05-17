const initState = {
  items: []
};

const movingItemsReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_MITEMS": {
      return {
        ...state,
        items: action.payload
      }
    }
    case "ADD_MITEM": {
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    }
    case "UPDATE_MITEM": {
      return {
        ...state,
        items: state.items.map(item => item._id === action.payload._id ? action.payload : item )
      }
    }
    case "REMOVE_MITEM": {
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload )
      }
    }
    default:
      return state;
  }
};

export default movingItemsReducer;
