import { of, from, concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { FETCH_DATA } from '../actions/types';
import { fetchDataInProgress, fetchDataCompleted } from '../actions/fetchDataAction';
import { getData } from '../services/APIService';

export const fetchDataEpic = (action$) => action$.pipe(
    ofType(FETCH_DATA),
    switchMap(action =>
        concat(
            of(fetchDataInProgress(true)),
            from(getData(action.payload)).pipe(
                map(response => fetchDataCompleted(response.data))
            )
        )
    )
);