import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

// TodoList is a list showing visible todos.
// todos: Array is an array of todo items with { id, text, completed } shape.
// onTodoClick(id: number) is a callback to invoke when a todo is clicked.

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.bool.isRequired,
      completed: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
