import { combineReducers } from "redux";
import user from "./userReducer";
import images from "./imagesReducer";
import ideas from "./ideasReducer";
import urls from "./urlsReducer";

const rootReducer = combineReducers({ user, images, ideas, urls });
export default rootReducer;
