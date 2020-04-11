import { of, from } from "rxjs";
import * as actionTypes from "./constants";
import { catchError, map, filter, switchMap } from "rxjs/operators";
import { searchSuccess, searchFailure } from "./actions";

export const fetchSearchResults = (action$, state$, search) =>
  action$.pipe(
    filter((action) => action.type === actionTypes.SEARCH_REQUEST),
    switchMap((action) =>
      from(search(action.query)).pipe(
        map(searchSuccess),
        catchError((error) => of(searchFailure(error)))
      )
    )
  );
