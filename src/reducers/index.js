import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

//When you emit an action, todoApp returned by combineReducers will call both reducers:
// let nextTodos = todos(state.todos, action)
// let nextVisibleTodoFilter = visibleTodoFilter(state.visibleTodoFilter, action)

export default todoApp;

/*
Note that this is equivalent to:

export default function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
*/

//Note that each of these reducers is managing its own part of the global state.
//The state parameter is different for every reducer, and corresponds to the part of the state it manages.
//Note that a reducer is a pure function. It only computes the next state.
//It should be completely predictable: calling it with the same inputs many times should produce the same outputs.
//It shouldn't perform any side effects like API calls or router transitions.
//These should happen before an action is dispatched.
