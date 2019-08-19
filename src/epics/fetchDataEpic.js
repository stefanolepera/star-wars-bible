import { of, from, concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError, debounceTime } from 'rxjs/operators';
import { FETCH_DATA } from '../actions/types';
import { fetchDataInProgress, fetchDataCompleted, fetchDataError } from '../actions/fetchDataAction';
import { getData } from '../services/APIService';
import { API_END_POINTS } from '../utils/APIEndPoints';

export const fetchDataEpic = (action$) => action$.pipe(
    ofType(FETCH_DATA),
    debounceTime(250),
    switchMap(action =>
        concat(
            of(fetchDataInProgress(true)),
            from(getData(API_END_POINTS.characters, action.payload)).pipe(
                map(response => fetchDataCompleted(response.data)),
                catchError(error => of(fetchDataError(error.response.details)))
            )
        )
    )
);