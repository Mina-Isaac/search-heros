import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import { search } from "../api";

function* fetchSearchResult(action) {
  try {
    const result = yield call(search, action.query);
    yield put(actions.searchSuccess(result));
  } catch (err) {
    yield put(actions.searchFailure(err));
  }
}

function* rootSaga() {
  yield takeLatest(actions.searchRequest().type, fetchSearchResult);
}
export default rootSaga;
