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
  }
}

export default actions;