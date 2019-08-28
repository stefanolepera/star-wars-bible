import { TestScheduler } from 'rxjs/testing';
import infiniteScrollEpic from '../infiniteScrollEpic';
import { SCROLL_EVENT_LISTENER } from '../../actions/types';

describe('fetchDataEpic test', () => {
    it('generate the stream correctly', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
          
        testScheduler.run(({ hot, cold, expectObservable }) => {
            const action$ = hot('-a', {
                a: { 
                    type: SCROLL_EVENT_LISTENER
                }
            });
            
            const state$ = {
                value: {
                    data: {
                        next: false,
                        isFetchingInProgress: true
                    }
                }
            };
            const dependencies = null;
          
            const output$ = infiniteScrollEpic(action$, state$, dependencies);
    
            expectObservable(output$).toBe('', {});
        }); 
    });
});
