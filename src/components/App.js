import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';
import AddTodo from './addTodo/index';
import actions from '../actions/index';
import TodoList from '../components/todoList/index';
import Quote from '../components/getQuote/index';
import Puppy from '../components/puppy/index';

export const App = ({submitTodo, todos, deleteTodo, getQuote, quote, getPuppyPic, image}) => {
  return (
    <div>
      <h1>My App</h1>
      <AddTodo submitTodo={submitTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Quote getQuote={getQuote} quote={quote} />
      <Puppy getPuppyPic={getPuppyPic} image={image} />
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
  quote: PropTypes.object.isRequired,
  getPuppyPic: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired
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
  },

  getPuppyPic: () => {
    dispatch(actions.fetchPuppy());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);