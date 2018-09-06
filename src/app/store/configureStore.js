import {
  createStore,
  applyMiddleware
} from "redux";
import {
  composeWithDevTools
} from "redux-devtools-extension";
import {
  reactReduxFirebase,
  getFirebase
} from 'react-redux-firebase';
import {
  reduxFirestore,
  getFirestore
} from 'redux-firestore';
import rootReducer from "../reducer/rootReducer";
import thunk from 'redux-thunk'
import firebase from "../config/firebase";

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  userFirestoreForProfile: true
}
export const configureStore = preloadedState => {
  const middlewares = [thunk.withExtraArgument({
    getFirebase,
    getFirestore
  })];
  const middlewareEnhance = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhance];

  const composedEnhancer = composeWithDevTools(...storeEnhancers, reactReduxFirebase(firebase, rrfConfig), reduxFirestore(firebase));

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