// ============ General ============ //

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// ============ All Reducers ============ //

// import {authReducer} from "./reducers/userReducer";

const rootReducer = combineReducers({
  // auth: authReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
