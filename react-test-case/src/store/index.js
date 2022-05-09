import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import usersListReducer from "./reducers/usersListReducer";

const rootReducer = combineReducers({
  users: usersListReducer,
  // loading: spinnerReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);