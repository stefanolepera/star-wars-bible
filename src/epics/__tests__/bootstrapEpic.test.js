import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { bootstrapEpic } from '../bootstrapEpic';
import { BOOTSTRAP_APPLICATION, BOOTSTRAP_DATA_COMPLETED } from '../../actions/types';

describe('bootstrapEpic test', () => {
    it('should return the expected action', () => {
        const mockResponse = { title: 'A New Hope' };
        const action$ = of({ type: BOOTSTRAP_APPLICATION });
        const state$ = null;
        const dependencies = {
            getDataa: url => of(mockResponse)
        };

        const result$ = bootstrapEpic(action$, state$, dependencies).pipe(
            toArray()
        );

        result$.subscribe(actions => {
            expect(actions).toEqual([{
                type: BOOTSTRAP_DATA_COMPLETED,
                payload: mockResponse
            }]);
        });
    });
});
