import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//It's easy to create a store if you have a reducer. In the previous section,
// we used combineReducers() to combine several reducers into one. We will now import it, and pass it to createStore().


let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
