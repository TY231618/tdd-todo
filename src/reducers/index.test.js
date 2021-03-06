import { reducer, initialState } from './index';
import types from '../constants/types';

describe('Reducer', () => {

  const todoText = 'A todo';
  
  it('should return initialState when no action is passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })

  describe('submitTodo', () => {
    it('should return the correct state after being called', () => {

      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText
      };

      const expectedState = {
        todos: [
          {id: 1, text: todoText}
        ],
        quote: {},
        image: ''
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    })
  })

  describe('deleteTodo', () => {
    it('should return the correct state after being called', () => {

      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ]
      }

      const action = {
        type: types.DELETE_TODO,
        id: 1
      }

      const expectedState = {
        todos: []
      }

      expect(reducer(startingState, action)).toEqual(expectedState);
    })
  })

  describe('getQuote', () => {
    it('should return the correct state after being called', () => {
      const startingState = {
        todos: [],
        quote: {}
      }

      const action = {
        type: types.GET_QUOTE,
        quote: {quote: 'I am a quote'}
      }

      const expectedState = {
        todos: [],
        quote: {quote: 'I am a quote'}
      }

      expect(reducer(startingState, action)).toEqual(expectedState);
    })
  })

  describe('getImage', () => {
    it('should return the correct state after being called', () => {
      const startingState = {
        todos: [],
        quote: {},
        image: ''
      }

      const action = {
        type: types.FETCH_PUPPY,
        image: 'some image url'
      }

      const expectedState = {
        todos: [],
        quote: {},
        image: 'some image url'
      }

      expect(reducer(startingState, action)).toEqual(expectedState);
    })
  })
})