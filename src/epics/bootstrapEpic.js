import { of, concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BOOTSTRAP_APPLICATION } from '../actions/types';
import {
    bootstrapDataCompleted,
    bootstrapDataError,
    scrollEventListener
} from '../actions/bootstrapAction';
import { sortedFilms } from '../utils/FilterData';
import { API_END_POINTS } from '../constants/APIEndPoints';

const bootstrapEpic = (action$, state$, { getData }) => action$.pipe(
    ofType(BOOTSTRAP_APPLICATION),
    switchMap(() =>
        concat(
            of(scrollEventListener()),
            getData(API_END_POINTS.films).pipe(
                map(films =>
                    bootstrapDataCompleted(
                        sortedFilms(films.response.results)
                    )
                ),
                catchError(() => of(bootstrapDataError(true)))
            )
        )
    )
);

export default bootstrapEpic;
