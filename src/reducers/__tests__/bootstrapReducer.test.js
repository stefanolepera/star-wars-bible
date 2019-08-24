import bootstrapReducer from '../bootstrapReducer';
import { BOOTSTRAP_DATA_COMPLETED, BOOTSTRAP_DATA_ERROR } from '../../actions/types';

describe('bootstrapReducer test', () => {
    const initialState = {
        filmsData: [],
        filmsDataError: false
    };

    describe('INITIAL_STATE test', () => {
        it('should return the initial state', () => {
            const action = { type: 'dummy_action' };

            expect(bootstrapReducer(undefined, action)).toEqual(initialState);
        });
    });

    describe('BOOTSTRAP_DATA_COMPLETED test', () => {
        it('should return the initial state', () => {
            const action = { 
                type: BOOTSTRAP_DATA_COMPLETED,
                payload: [] 
            };

            const expectedState = {
                ...initialState,
                filmsData: []
            };

            expect(bootstrapReducer(undefined, action)).toEqual(expectedState);
        });
    });

    describe('BOOTSTRAP_DATA_ERROR test', () => {
        it('should return the correct state', () => {
            const action = {
                type: BOOTSTRAP_DATA_ERROR,
                payload: true
            };

            const expectedState = {
                ...initialState,
                filmsDataError: true
            };

            expect(bootstrapReducer(undefined, action)).toEqual(expectedState);
        });
    });
});
