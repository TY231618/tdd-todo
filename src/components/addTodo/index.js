import React from 'react';

const AddTodo = () => {
  return (
    <div>
      <form>
        <input type="text" className="todo-input" />
        <button type="submit" className="todo-submit">AddTodo</button>
      </form>
    </div>
  )
}

export default AddTodo;