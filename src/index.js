import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dotenv from 'dotenv';

import {createStore,applyMiddleware} from 'redux';
import rootReducers from './reducers/rootReducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter} from 'react-router-dom';


dotenv.config();

const store=createStore(rootReducers,composeWithDevTools(
  applyMiddleware(reduxPromise, thunk)
));


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
