let nextTodoId = 0;
//nextTodoId starts at zero
//Action creators are exactly that—functions that create actions. It's easy to conflate the terms “action” and “action creator,” so do your best to use the proper term.
//Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed

//'text' object is exported

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  };
};

//Other than type, the structure of an action object is really up to you.

//'filter' is being exported
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

//id is being exported
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};
