import { of, concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError, debounceTime } from 'rxjs/operators';
import { FETCH_DATA } from '../actions/types';
import { fetchDataInProgress, fetchDataCompleted, fetchDataError } from '../actions/fetchDataAction';
import { API_END_POINTS } from '../utils/APIEndPoints';

export const fetchDataEpic = (action$, state$, { getData }) => action$.pipe(
    ofType(FETCH_DATA),
    debounceTime(350),
    switchMap(action =>
        concat(
            of(fetchDataInProgress(true)),
            getData(API_END_POINTS.characters, action.payload).pipe(
                map(search => fetchDataCompleted(search.response)),
                catchError(error => of(fetchDataError(error.response.details)))
            )
        )
    )
);