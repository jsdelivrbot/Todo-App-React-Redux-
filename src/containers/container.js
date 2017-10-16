import { connect } from 'react-redux';
import * as components from '../components/app.js';
import { addTodo, toggleTodo } from '../actions/index.js';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
    addTodo: text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id))
  };
  }
)(components.TodoList);