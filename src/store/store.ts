import { createStore, compose } from "redux";

import rootReducer from "../reducers";

let composeEnhancers = compose;
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(rootReducer, composeEnhancers());
