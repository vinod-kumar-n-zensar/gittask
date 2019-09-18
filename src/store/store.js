import { createStore } from "redux";
import rootReducer from "../reducers/index";

export function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
