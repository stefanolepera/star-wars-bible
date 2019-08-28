import { TestScheduler } from 'rxjs/testing';
import bootstrapEpic from '../bootstrapEpic';
import { BOOTSTRAP_APPLICATION, BOOTSTRAP_DATA_ERROR, FETCH_DATA_IN_PROGRESS, SCROLL_EVENT_LISTENER } from '../../actions/types';

describe('bootstrapEpic test', () => {
    it('generate the stream correctly', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
          
        testScheduler.run(({ hot, cold, expectObservable }) => {
            const action$ = hot('-a', {
                a: { 
                    type: BOOTSTRAP_APPLICATION
                }
            });
            const state$ = {
                value: {
                    data: {
                        searchType: ''
                    }
                }
            };
            const dependencies = {
                getData: url => cold('----a', {
                    a: { url }
                })
            };
          
            const output$ = bootstrapEpic(action$, state$, dependencies);
    
            expectObservable(output$).toBe('-(ab)c', {
                a: {
                    type: SCROLL_EVENT_LISTENER
                },
                b: {
                    type: FETCH_DATA_IN_PROGRESS,
                    payload: true
                },
                c: {
                    type: BOOTSTRAP_DATA_ERROR,
                    payload: true
                }
            });
        }); 
    });
});
