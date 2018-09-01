import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/rootReducer";
import thunk from 'redux-thunk'

export const configureStore = preloadedState => {
  const middlewares = [thunk];
  const middlewareEnhance = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhance];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducer/rootReducer", () => {
        const newRootReducer = require("../reducer/rootReducer").default;
        store.replaceReducer(newRootReducer);
      });
    }
  }
  return store;
};
