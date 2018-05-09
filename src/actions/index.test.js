import actions from './index';
import types from '../constants/types';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

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

  it('should create an action to retrieve a quote', (done) => {
    const mock = new MockAdapter(axios);
    const expectedAction = {
      type: types.GET_QUOTE,
      payload: quoteData
    }
    mock.onGet('http://quotes.rest/qod.json').reply(200, expectedAction);

    // return actions.getQuote().then(res => {
    //   expect(res).toEqual(expectedAction);
    //   done();
    // })

    // expect(actions.getQuote()).toEqual(expectedAction)
    // done()
  })
})