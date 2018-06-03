import actions from './index';
import types from '../constants/types';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';

describe('Actions', () => {
  
  const todoText = 'A todo';

  const quoteData = {};

  it('should create an action to add todo', () => {
    const expectedAction = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: todoText
    };

    expect(actions.submitTodo(todoText)).toEqual(expectedAction);
  })

  it('should create an action to delete a todo', () => {
    const expectedAction = {
      type: types.DELETE_TODO,
      id: 1
    }

    expect(actions.deleteTodo(1)).toEqual(expectedAction);
  })

  describe('getQuote action', () => {

    it('should create an action to retrieve a quote', () => {
      const mock = new MockAdapter(axios);
   
      const quote = {
        quote: 'someQuote'
      }
  
      mock.onGet('/quote').reply(200, {
        quote: quote
      });
  
      const expectedAction = {
        type: types.GET_QUOTE,
        quote: quote
      }
  
      axios.get('/quote').then(() => {
        expect(actions.getQuoteSuccess(quote)).toEqual(expectedAction)
      })
    })
  })

  describe('getPuppy action', () => {
    it('should create an action to retrieve a puppy', () => {
      const mock = new MockAdapter(axios);

      const image = ''

      mock.onGet('/puppy').reply(200, {
        image: image
      })

      const expectedAction = {
        type: types.FETCH_PUPPY,
        image: image
      }

      return axios.get('/puppy').then(() => {
        expect(actions.getImageSuccess(image)).toEqual(expectedAction)
      })
    })
  })
})