import { of, concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, exhaustMap, catchError, debounceTime, timeout } from 'rxjs/operators';
import { FETCH_DATA } from '../actions/types';
import { REQUEST_TIMEOUT } from '../constants/Settings';
import { fetchDataInProgress, fetchDataCompleted, fetchDataError } from '../actions/fetchDataAction';

const fetchDataEpic = (action$, state$, { getData }) => action$.pipe(
    ofType(FETCH_DATA),
    debounceTime(350),
    switchMap(action =>
        concat(
            of(fetchDataInProgress(true)),
            getData(action.payload.url).pipe(
                timeout(REQUEST_TIMEOUT),
                exhaustMap(search => of(fetchDataCompleted(search.response))),
                catchError(() => of(fetchDataError(true)))
            ),
            of(fetchDataInProgress(false))
        )
    )
);

export default fetchDataEpic