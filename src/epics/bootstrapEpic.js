import { of, concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, catchError, timeout, retry } from 'rxjs/operators';
import { BOOTSTRAP_APPLICATION } from '../actions/types';
import {
    bootstrapDataCompleted,
    bootstrapDataError,
    scrollEventListener
} from '../actions/bootstrapAction';
import { fetchDataInProgress } from '../actions/fetchDataAction';
import { setSearchType } from '../actions/fetchDataAction';
import { sortedFilms } from '../utils/FilterData';
import { REQUEST_TIMEOUT } from '../constants/Settings';
import { SEARCH_CATEGORIES } from '../constants/Settings';
import { API_END_POINTS } from '../constants/APIEndPoints';

const bootstrapEpic = (action$, state$, { getData }) => action$.pipe(
    ofType(BOOTSTRAP_APPLICATION),
    switchMap(() =>
        concat(
            of(scrollEventListener()),
            of(fetchDataInProgress(true)),
            getData(API_END_POINTS[state$.value.data.searchType]).pipe(
                retry(3),
                timeout(REQUEST_TIMEOUT),
                switchMap(films =>
                    concat(
                        of(setSearchType(SEARCH_CATEGORIES['Characters'])),
                        of(bootstrapDataCompleted(sortedFilms(films.response.results)))
                    )
                ),
                catchError(() => of(bootstrapDataError(true)))
            )
        )
    )
);

export default bootstrapEpic;
