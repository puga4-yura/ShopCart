import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import store from "./store/state"
//import {_callSubcriber} from "./render";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root'));
}

//removeElement={store.removeElement}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)
//console.log(state.product)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
