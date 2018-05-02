import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import AddTodo from './addTodo/index';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <AddTodo />
    </div>
  )
}

export default App;