import {combineReducers, createStore} from "redux";
import productReducer from "./product-reducer";
import resultReducer from "./result-reducer";

let redusers = combineReducers({
  product: productReducer,
  result: resultReducer
});

let store  = createStore(redusers);

export default store;