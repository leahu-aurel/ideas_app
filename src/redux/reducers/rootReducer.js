import { combineReducers } from "redux";
import user from "./userReducer";
import myIdeas from "./myIdeasReducer";
const rootReducer = combineReducers({ user, myIdeas });
export default rootReducer;
