import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./Modules";
import { rootSaga } from "./Modules";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware)

  ));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
