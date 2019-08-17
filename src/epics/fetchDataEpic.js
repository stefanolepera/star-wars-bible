import { ofType } from 'redux-observable';
import { switchMap, ignoreElements } from 'rxjs/operators';

export const fetchDataEpic = (action$) => action$.pipe(
    ofType('FETCH_DATA'),
    switchMap(() =>
        ignoreElements()
    )
);