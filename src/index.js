import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import rootSaga from './ReduxComponents/sagas';
import createSagaMiddleware from 'redux-saga';

import { reducer } from "./ReduxComponents/Directorsreducer.js";

import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  reducer,applyMiddleware(sagaMiddleware),
  );
  
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  sagaMiddleware.run(rootSaga);

  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
