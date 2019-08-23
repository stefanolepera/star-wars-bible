import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BOOTSTRAP_APPLICATION } from '../actions/types';
import { bootstrapDataCompleted, bootstrapDataError } from '../actions/bootstrapAction';
import { sortedFilms } from '../utils/FilterData';
import { API_END_POINTS } from '../utils/APIEndPoints';

export const bootstrapEpic = (action$, state$, { getData }) => action$.pipe(
    ofType(BOOTSTRAP_APPLICATION),
    switchMap(() =>
        getData(API_END_POINTS.films).pipe(
            map(films => bootstrapDataCompleted(sortedFilms(films.response.results))),
            catchError(() => of(bootstrapDataError(true)))
        )
    )
);