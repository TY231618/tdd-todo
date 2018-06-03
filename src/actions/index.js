import types from '../constants/types';
import axios from 'axios';

let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId
}

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
          const quoteResult = res.data.contents.quotes[0];

          return dispatch(this.getQuoteSuccess(quoteResult))
        })
        .catch(err => {
          throw new Error(err)
        })
    }
  },

  getImageSuccess(image) {
    return {
      type: types.FETCH_PUPPY,
      image: image
    }
  },

  fetchPuppy() {
    return dispatch => {
      return axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        const image = res.data.message
        return dispatch(this.getImageSuccess(image));
      })
      .catch(err => {
        throw new Error('fuck:', err)
      })
    }
  }
}

export default actions;