import { combineReducers, createStore } from 'redux';
import submitTodo from './reducers/index';

const reducers = combineReducers({
  submitTodo
})

export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());