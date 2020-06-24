import { combineReducers } from "redux";
import user from "./userReducer";
import images from "./imagesReducer";
import ideas from "./ideasReducer";
import urls from "./urlsReducer";
import names from "./namesReducer";

const rootReducer = combineReducers({ user, images, ideas, urls, names });
export default rootReducer;
