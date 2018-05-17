import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';
import AddTodo from './addTodo/index';
import actions from '../actions/index';
import TodoList from '../components/todoList/index';
import Quote from '../components/getQuote/index';

export const App = ({submitTodo, todos, deleteTodo, getQuote, quote}) => {
  return (
    <div>
      <h1>My App</h1>
      <AddTodo submitTodo={submitTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Quote getQuote={getQuote} quote={quote}/>
    </div>
  )
}

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  getQuote: PropTypes.func.isRequired,
  quote: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return state.todoListApp
}

const mapDispatchToProps = (dispatch) => ({
  submitTodo: (text) => {
    if(text) {
      dispatch(actions.submitTodo(text));
    }
  },

  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },

  getQuote: () => {
    dispatch(actions.getQuote());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);