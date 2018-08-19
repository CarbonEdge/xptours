import { createStore, applyMiddleware, compose } from 'redux'

export const configureStore = (preloadedState) =>{
    const middlewares = [];
    const middlewareEnhance = applyMiddleware(...middlewares);

    const storeEnhancers = [];

    const composedEnhancer = compose(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    return store;
}