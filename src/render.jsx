import ReactDOM from "react-dom";
import App from "./index";
import state from "./store/state";
import React from "react";
import removeElement from "./store/state"

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state.product} removeElement={removeElement}/>,
    document.getElementById('root'));
}