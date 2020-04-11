import * as actionTypes from "../constants";

export default function reducer(state = false, action) {
  switch (action.type) {
    case actionTypes.SEARCH_REQUEST:
      return true;
    case actionTypes.SEARCH_SUCCESS:
      return false;
    case actionTypes.SEARCH_FAILURE:
      return false;
    default:
      return false;
  }
}
