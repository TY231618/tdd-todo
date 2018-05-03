import types from '../constants/types';

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
  }
}

export default actions;