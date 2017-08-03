/*
The reducer is a pure function that takes the previous state and an action, and returns the next state.

(previousState, action) => newState
Given the same arguments, it should calculate the next state and return it. No surprises.
No side effects. No API calls. No mutations. Just a calculation.
*/

//You must supply an empty object as the first parameter.

/*
Since one of the core tenets of Redux is to never mutate state, you'll often find yourself using Object.assign() to create copies of objects with new or updated values.
For example, in the todos below Object.assign() was used to return a new state object with an updated visibilityFilter property:
While effective, using Object.assign() can quickly make simple reducers difficult to read given its rather verbose syntax.
An alternative approach is to use the object spread syntax proposed for the next versions of JavaScript which lets you use the spread (...) operator to copy enumerable properties from one object to another in a more succinct way.
The object spread operator is conceptually similar to the ES6 array spread operator.
Object.assign(target, ...sources).
*/



const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
        ? { ...todo, completed: !todo.completed }
        : todo
      );
    default: // We return the previous state in the default case. It's important to return the previous state for any unknown action.


      return state;
  };
};

export default todos;
