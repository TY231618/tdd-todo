import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import todoListApp from './reducers/index';

const middleware = applyMiddleware(thunk);

const reducers = combineReducers({
  todoListApp
})

export default createStore(reducers, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));