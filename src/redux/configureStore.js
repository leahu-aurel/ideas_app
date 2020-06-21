import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/rootReducer";

const loggerMiddleWare = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleWare, thunkMiddleware)
);

export default store;
