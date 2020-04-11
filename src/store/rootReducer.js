import { combineReducers } from "redux";
import loading from "./reducers/loadingReducer";
import result from "./reducers/resultReducer";

export default combineReducers({
  loading,
  result,
});
