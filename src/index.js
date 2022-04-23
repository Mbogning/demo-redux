import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import './lib/actions'
import store from './lib/store';
// import { increment } from './lib/actions';

console.log(store.getState())

ReactDOM.render(
  <Provider  store={store} >
      <App />
  </Provider>,
  document.getElementById('root')
);
