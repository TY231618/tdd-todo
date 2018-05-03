import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';
import AddTodo from './addTodo/index';
import actions from '../actions/index';

export const App = ({submitTodo}) => {
  return (
    <div>
      <h1>My App</h1>
      <AddTodo submitTodo={submitTodo} />
    </div>
  )
}

App.propTypes = {
  submitTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    submitTodo: state.submitTodo
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitTodo: (text) => {
    if(text) {
      dispatch(actions.submitTodo(text));
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);