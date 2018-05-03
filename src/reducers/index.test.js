import { reducer, initialState } from './index';

describe('Reducer', () => {
  it('should return initialState when no action is passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })
})