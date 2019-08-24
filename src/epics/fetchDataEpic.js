import { of, concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError, debounceTime } from 'rxjs/operators';
import { FETCH_DATA } from '../actions/types';
import { fetchDataInProgress, fetchDataCompleted, fetchDataError } from '../actions/fetchDataAction';

export const fetchDataEpic = (action$, state$, { getData }) => action$.pipe(
    ofType(FETCH_DATA),
    debounceTime(350),
    switchMap(action =>
        concat(
            of(fetchDataInProgress(true)),
            getData(action.payload.url).pipe(
                map(search => fetchDataCompleted(search.response)),
                catchError(error => of(fetchDataError(error.response.details)))
            ),
            of(fetchDataInProgress(false)),
        )
    )
);