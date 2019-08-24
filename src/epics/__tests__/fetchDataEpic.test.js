import { TestScheduler } from 'rxjs/testing';
import { fetchDataEpic } from '../fetchDataEpic';
import { FETCH_DATA, FETCH_DATA_IN_PROGRESS, FETCH_DATA_COMPLETED } from '../../actions/types';

describe('fetchDataEpic test', () => {
    it('generate the stream correctly', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
          
        testScheduler.run(({ hot, cold, expectObservable }) => {
            const action$ = hot('-a', {
                a: { 
                    type: FETCH_DATA,
                    payload: {
                        url: ''
                    }
                }
            });
            const state$ = null;
            const dependencies = {
                getData: url => cold('--a', {
                    a: { url }
                })
            };
          
            const output$ = fetchDataEpic(action$, state$, dependencies);
    
            expectObservable(output$).toBe('350ms -a-b', {
                a: {
                    type: FETCH_DATA_IN_PROGRESS,
                    payload: true
                },
                b: {
                    type: FETCH_DATA_COMPLETED,
                    payload: undefined
                }
            });
        }); 
    }); 
});
