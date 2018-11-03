import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import issues from "./reducers/issues";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({ issues }),
  composeEnhancers(applyMiddleware(logger, thunk))
);
