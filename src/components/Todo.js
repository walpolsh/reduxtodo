import React from 'react';
import PropTypes from 'prop-types';
//Todo is a single todo item.
//text: string is the text to show.
//completed: boolean is whether todo should appear crossed out.
//onClick() is a callback to invoke when a todo is clicked.


const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
      {text}
  </li>
);

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
