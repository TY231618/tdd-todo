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
        ]
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
})