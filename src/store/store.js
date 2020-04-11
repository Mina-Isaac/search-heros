import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { search } from "../api";
import rootReducer from "./rootReducer";
import { fetchSearchResults } from "./epic";

const epicMiddleware = createEpicMiddleware({
  dependencies: search,
});
const enhancer = compose(applyMiddleware(epicMiddleware));
const store = createStore(rootReducer, enhancer);
epicMiddleware.run(fetchSearchResults);

export default store;
