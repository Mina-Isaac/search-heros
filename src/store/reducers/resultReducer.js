import * as actionTypes from "../constants";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.SEARCH_SUCCESS:
      return action.result;
    case actionTypes.SEARCH_FAILURE:
      return [];
    default:
      return state;
  }
}
