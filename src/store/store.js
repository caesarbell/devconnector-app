import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const middleware = [thunk];

const initialState = {};

/**
 * The only store enhancer that ships with Redux is applyMiddleware
 * others are third party middlewares 
 * 
 * @param { rootReducer , preloadedState {}, applyMiddleware }
 */

/**
 * Compose allows you to call deeply nested functions, without the rightward drift.
 */

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );


export default store; 