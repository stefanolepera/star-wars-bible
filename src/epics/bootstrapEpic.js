import { of, from } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BOOTSTRAP_APPLICATION } from '../actions/types';
import { bootstrapDataCompleted, bootstrapDataError } from '../actions/bootstrapAction';
import { sortedFilms } from '../utils/FilterData';
import { getData } from '../services/APIService';
import { API_END_POINTS } from '../utils/APIEndPoints';

export const bootstrapEpic = (action$) => action$.pipe(
    ofType(BOOTSTRAP_APPLICATION),
    switchMap(() =>
        from(getData(API_END_POINTS.films)).pipe(
            map(response => bootstrapDataCompleted(sortedFilms(response.data.results))),
            catchError(() => of(bootstrapDataError(true)))
        )
    )
);