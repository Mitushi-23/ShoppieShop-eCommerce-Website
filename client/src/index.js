import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import './index.css';
import './bootstrap.min(3).css'
// import './bootstrap.min(2).css'
// import './bootstrap.min (1).css'
// import './bootstrap.min.css'
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


