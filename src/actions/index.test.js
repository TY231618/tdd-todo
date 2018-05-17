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

  it('should create an action to retrieve a quote', async () => {
    const mock = new MockAdapter(axios);
 
    const quote = 'someQuote';

    mock.onGet('/quote').reply(200, {
      quote: quote
    });

    const expectedAction = {
      type: types.GET_QUOTE,
      quote: quote
    }

    const res = await axios.get('/quote');
    expect(actions.getQuoteSuccess(quote)).toEqual(expectedAction)
    mock.restore();
  })
})