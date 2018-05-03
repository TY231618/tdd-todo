import { combineReducers, createStore } from 'redux';
import reducer from './reducers/index';

const reducers = combineReducers({
  submitTodo: reducer
})

export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());