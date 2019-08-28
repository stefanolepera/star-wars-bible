import { fromEvent } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, throttleTime, map, filter } from 'rxjs/operators';
import { SCROLL_EVENT_LISTENER } from '../actions/types';
import { fetchData } from '../actions/fetchDataAction';
import { shouldLoadMore } from '../utils/EventsChecker';

const infiniteScrollEpic = (action$, state$) => action$.pipe(
    ofType(SCROLL_EVENT_LISTENER),
    switchMap(() =>
        fromEvent(window, 'scroll').pipe(
            throttleTime(400),
            filter(ev => shouldLoadMore(ev, state$.value.data.next, state$.value.data.isFetchingInProgress)),
            map(() => fetchData({
                url: state$.value.data.next,
                fromSearch: false
            }))
        )
    )
);

export default infiniteScrollEpic;