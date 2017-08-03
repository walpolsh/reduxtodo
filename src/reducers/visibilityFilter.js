//The reducer is a pure function that takes the previous state and an action, and returns the next state.

// (previousState, action) => newState

/*

It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue). It's very important that the reducer stays pure. Things you should never do inside a reducer:

Mutate its arguments;
Perform side effects like API calls and routing transitions;
Call non-pure functions, e.g. Date.now() or Math.random().

*/

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      // return the state with a filter added on.
      return action.filter;
    default:
      // For now, don't handle any actions
      // and just return the state given to us.
      return state;
  }
};

export default visibilityFilter;
