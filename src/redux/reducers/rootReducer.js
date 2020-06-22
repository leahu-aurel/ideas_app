import { combineReducers } from "redux";
import user from "./userReducer";
import ideas from "./ideasReducer";
const rootReducer = combineReducers({ user, ideas });
export default rootReducer;
