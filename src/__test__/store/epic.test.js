import { StateObservable, ActionsObservable } from "redux-observable";
import { Subject } from "rxjs";
import * as actions from "../../store/actions";
import { fetchSearchResults } from "../../store/epic";
import { heroes as sampleResponse } from "../../api/db.json";
import { initialState } from "../components/App.test";

let state$;
let search;
describe("Search epic", () => {
  beforeEach(() => {
    state$ = new StateObservable(new Subject(), initialState);
    search = jest.fn();
  });

  it("should dispatch searchSuccess action when search api returns", (done) => {
    search.mockReturnValue(Promise.resolve(sampleResponse));
    const action$ = ActionsObservable.of(actions.searchRequest());
    const expectedOutputAction = actions.searchSuccess(sampleResponse);
    fetchSearchResults(action$, state$, search).subscribe((actionReceived) => {
      expect(actionReceived.type).toBe(expectedOutputAction.type);
      done();
    });
  });
  it("should dispatch searchFailure action when the request fails", (done) => {
    search.mockReturnValue(Promise.reject(new Error("Some error")));
    const action$ = ActionsObservable.of(actions.searchRequest());
    const expectedOutputAction = actions.searchFailure(new Error());
    fetchSearchResults(action$, state$, search).subscribe((actionReceived) => {
      expect(actionReceived.type).toBe(expectedOutputAction.type);
      done();
    });
  });
});
