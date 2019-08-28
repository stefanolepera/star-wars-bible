import fetchDataReducer from '../fetchDataReducer';
import { 
    FETCH_DATA,
    FETCH_DATA_IN_PROGRESS,
    FETCH_DATA_ERROR,
    FETCH_DATA_COMPLETED,
    SET_SEARCH_TYPE
} from '../../actions/types';

describe('fetchDataReducer test', () => {
    const initialState = {
        queryValue: '',
        queryData: [],
        searchType: 'Films',
        next: '',
        count: -1,
        hasPrevious: false,
        isFromSearch: false,
        isFetchingInProgress: false,
        isFetchingError: false
    };

    describe('INITIAL_STATE test', () => {
        it('should return the initial state', () => {
            const action = { type: 'dummy_action' };

            expect(fetchDataReducer(undefined, action)).toEqual(initialState);
        });
    });

    describe('FETCH_DATA test', () => {
        it('should return the initial state', () => {
            const action = { 
                type: FETCH_DATA,
                payload: {
                    url: 'url',
                    fromSearch: true
                }
            };

            const expectedState = {
                ...initialState,
                queryValue: 'url',
                isFromSearch: true
            };

            expect(fetchDataReducer(initialState, action)).toEqual(expectedState);
        });
    });

    describe('FETCH_DATA_IN_PROGRESS test', () => {
        it('should return the correct state', () => {
            const action = {
                type: FETCH_DATA_IN_PROGRESS,
                payload: true
            };

            const expectedState = {
                ...initialState,
                isFetchingInProgress: true
            };

            expect(fetchDataReducer(initialState, action)).toEqual(expectedState);
        });
    });

    describe('FETCH_DATA_ERROR test', () => {
        it('should return the correct state', () => {
            const action = {
                type: FETCH_DATA_ERROR,
                payload: true
            };

            const expectedState = {
                ...initialState,
                isFetchingError: true
            };

            expect(fetchDataReducer(initialState, action)).toEqual(expectedState);
        });
    });

    describe('FETCH_DATA_COMPLETED test', () => {
        it('should return the correct state when previous is null', () => {
            const action = { 
                type: FETCH_DATA_COMPLETED,
                payload: {
                    count: 1,
                    next: null,
                    previous: null,
                    results: []
                }
            };

            const expectedState = {
                ...initialState,
                count: 1,
                next: null,
                hasPrevious: false,
                isSinglePage: true,
                queryData: []
            };

            expect(fetchDataReducer(initialState, action)).toEqual(expectedState);
        });
    });

    describe('FETCH_DATA_COMPLETED test', () => {
        it('should return the correct state when previous is not null', () => {
            const modifiedState = {
                ...initialState, 
                queryData:['something']
            }

            const action = { 
                type: FETCH_DATA_COMPLETED,
                payload: {
                    count: 1,
                    next: null,
                    previous: 'something',
                    results: ['else']
                }
            };

            const expectedState = {
                ...modifiedState,
                count: 1,
                next: null,
                hasPrevious: true,
                isSinglePage: false,
                queryData: ['something', 'else']
            };

            expect(fetchDataReducer(modifiedState, action)).toEqual(expectedState);
        });
    });

    describe('SET_SEARCH_TYPE test', () => {
        it('should return the correct state', () => {
            const action = {
                type: SET_SEARCH_TYPE,
                payload: ''
            };

            const expectedState = {
                ...initialState,
                queryData: [],
                searchType: '',
            };

            expect(fetchDataReducer(initialState, action)).toEqual(expectedState);
        });
    });
});
