import reducer from "../../store/rootReducer";
import * as actions from "../../store/actions";
import { heroes as result } from "../../api/db.json";


const getInitialState = (initial) =>
  reducer(initial , {} );

describe("Reducer test", () => {
  it("initial state should match a snapshot", () => {
    const initialState = getInitialState();
    expect(initialState).toMatchSnapshot();
  });

  it("should put retrieved search result in the store and set loading flag to false", () => {
    const initialState = getInitialState();
    const state = reducer(
      initialState,
      actions.searchSuccess(result)
    );
    expect(state.result).toStrictEqual(result);
    expect(state.loading).toEqual(false);
  });

  it("should set state.result to [] and set loading flag to false when an error occures", () => {
    const initialState = getInitialState();
    initialState.loading = true;
    const output = reducer(
      initialState,
      actions.searchFailure(new Error("some error occurred"))
    );
    expect(output.result).toHaveLength(0);
    expect(output.loading).toEqual(false);
  });
});
