import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';
import AddTodo from './addTodo/index';
import actions from '../actions/index';
import TodoList from '../components/todoList/index';

export const App = ({submitTodo, todos}) => {
  return (
    <div>
      <h1>My App</h1>
      <AddTodo submitTodo={submitTodo} />
      <TodoList todos={todos}/>
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
  ))
}

const mapStateToProps = (state) => {
  return state.submitTodo
}

const mapDispatchToProps = (dispatch) => ({
  submitTodo: (text) => {
    if(text) {
      dispatch(actions.submitTodo(text));
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);