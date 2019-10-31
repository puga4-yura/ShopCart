import {combineReducers, createStore} from "redux";
import productReducer from "./product-reducer";
import resultReducer from "./result-reducer";
import userReducer from "./user-reducer"

let redusers = combineReducers({
  product: productReducer,
  result: resultReducer,
  usersPage: userReducer
});
console.log(redusers)
let store  = createStore(redusers);
console.log(store)

export default store;

window.store = store;