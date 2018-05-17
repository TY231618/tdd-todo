import types from '../constants/types';
import axios from 'axios';

let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId
}

// const getQuoteSuccess = quote => {
//   return {
//     type: types.GET_QUOTE,
//     quote: quote
//   }
// }

const actions = {
  submitTodo(todo) {
    return {
      type: types.SUBMIT_TODO,
      id: nextId(),
      text: todo
    }
  },

  deleteTodo(id) {
    return {
      type: types.DELETE_TODO,
      id: id
    }
  },

  getQuoteSuccess(quote) {
    return {
      type: types.GET_QUOTE,
      quote: quote
    }
  },

  getQuote() {
    return dispatch => {
      return axios.get('http://quotes.rest/qod.json')
        .then(res => {
          const data = res.data;
          console.log('then res', res.data);
          return dispatch(this.getQuoteSuccess(data))
        })
        .catch(err => {
          throw new Error(err)
        })
    }
  }
}

export default actions;