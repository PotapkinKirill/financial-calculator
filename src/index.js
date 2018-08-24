import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


//const persistedState = loadState();
const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
)

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
