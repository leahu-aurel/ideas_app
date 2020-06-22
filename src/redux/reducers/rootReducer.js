import { combineReducers } from "redux";
import user from "./userReducer";
import images from "./imagesReducer";
import ideas from "./ideasReducer";
const rootReducer = combineReducers({ user, images, ideas });
export default rootReducer;
