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
    console.log('inside success =====> ', quote)
    return {
      type: types.GET_QUOTE,
      quote: quote
    }
  },

  getQuote() {
    return dispatch => {
      return axios.get('http://quotes.rest/qod.json')
        .then(res => {
          const quoteResult = res.data.contents.quotes[0].quote;

          console.log('then quoteResult =======> ', quoteResult);
          return dispatch(this.getQuoteSuccess(quoteResult))
        })
        .catch(err => {
          throw new Error(err)
        })
    }
  }
}

export default actions;