let nextTodoId = 0;

//Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  };
};

//Other than type, the structure of an action object is really up to you.

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};
