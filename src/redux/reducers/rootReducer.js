import todoReducer from "./todoReducer";
import { combineReducers } from "redux";
import countReducer from "./countReducer";

//Combine all the sub reducers
const rootReducer = combineReducers({
  todos: todoReducer,
  count: countReducer,
});

export default rootReducer;
