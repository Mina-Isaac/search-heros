import * as actionTypes from "./constants";

const searchRequest = (query) => ({
  type: actionTypes.SEARCH_REQUEST,
  query,
});

const searchSuccess = (result) => ({
  type: actionTypes.SEARCH_SUCCESS,
  result,
});

const searchFailure = (error) => ({
  type: actionTypes.SEARCH_FAILURE,
  error,
});

export { searchRequest, searchSuccess, searchFailure };
