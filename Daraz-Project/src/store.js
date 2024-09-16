import { createStore, combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";

// Combine all reducers (we are using only one for now)
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Create Redux store
export const store = createStore(
  rootReducer,
  // This enables Redux DevTools extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
