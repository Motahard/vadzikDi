import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import movingItemsReducer from "./movingItemsReducer";
import reportReducer from "./reportReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  itemsState: itemsReducer,
  movingItemsState: movingItemsReducer,
  reportState: reportReducer
});

export default rootReducer;
