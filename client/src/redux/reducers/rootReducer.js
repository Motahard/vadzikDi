import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import movingItemsReducer from "./movingItemsReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  itemsState: itemsReducer,
  movingItemsState: movingItemsReducer
});

export default rootReducer;
