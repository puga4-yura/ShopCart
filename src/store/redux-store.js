import {combineReducers, createStore} from "redux";
import productReducer from "./product-reducer";
import resultReducer from "./result-reducer";
import userReducer from "./user-reducer"

let redusers = combineReducers({
  product: productReducer,
  result: resultReducer,
  usersPage: userReducer
});

let store  = createStore(redusers);

export default store;