import types from '../constants/types';

export const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(types.SUBMIT_TODO):
      return { 
        todos: [
          {id: 1, text: action.text}
        ]
      }
    default:
      return state;
  }
};

export default reducer;