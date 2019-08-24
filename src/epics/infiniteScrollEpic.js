import { fromEvent } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, throttleTime, map, filter, skipWhile } from 'rxjs/operators';
import { SCROLL_EVENT_LISTENER } from '../actions/types';
import { fetchData } from '../actions/fetchDataAction';
import { hasReachThreshold } from '../utils/EventsChecker';

export const infiniteScrollEpic = (action$, state$) => action$.pipe(
    ofType(SCROLL_EVENT_LISTENER),
    switchMap(() =>
        fromEvent(window, 'scroll').pipe(
            throttleTime(800),
            filter(ev => hasReachThreshold(ev, state$.value.data.next)),
            map(() => fetchData({
                url: state$.value.data.next,
                fromSearch: false
            })),
            skipWhile(() => state$.value.data.isFetchingInProgress === true)
        )
    )
);