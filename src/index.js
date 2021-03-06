import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
//import store from "./store/store"
import store from "./store/redux-store"
import {Provider} from "react-redux";
//import {_callSubcriber} from "./render";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Provider store={store}>
      <App  />
    </Provider>,
    document.getElementById('root'));
}

//state={store.getState()} dispatch={store.dispatch.bind(store)}
rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state);
})
//console.log(state.product)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
