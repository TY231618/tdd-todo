import types from '../constants/types';

export const initialState = {
  todos: [],
  quote: {},
  image: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {

    case types.SUBMIT_TODO:
      return {
        ...state,  
        todos: [
          ...state.todos,
          {
            id: action.id, 
            text: action.text
          }
        ]
      }

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => todo.id != action.id)
        ]
      }
    
    case types.GET_QUOTE:
      return {
        ...state,
        quote: action.quote
      }
    
    case types.FETCH_PUPPY:
      return {
        ...state, 
        image: action.image
      }

    default:
      return state;
  }
};

export default reducer;