import configureStore from 'redux-mock-store';
import * as fetchDataAction from '../fetchDataAction';
import * as types from '../types';

const mockStore = configureStore();
const store = mockStore();

describe('fetchDataAction test', () => {
    beforeEach(() => {
        store.clearActions();
    });
    
    describe('fetchData test', () => {
        it('should dispatch the correct action', () => {
            const expectedActions = [
                {
                    type: types.FETCH_DATA,
                    payload: {
                        url: 'url',
                        fromSearch: true
                    }
                }
            ];

            store.dispatch(fetchDataAction.fetchData({
                url: 'url',
                fromSearch: true
            }));
            expect(store.getActions()).toEqual(expectedActions);
        });   
    });

    describe('fetchDataInProgress test', () => {
        it('should dispatch the correct action', () => {
            const expectedActions = [
                {
                    type: types.FETCH_DATA_IN_PROGRESS,
                    payload: true
                }
            ];

            store.dispatch(fetchDataAction.fetchDataInProgress(true));
            expect(store.getActions()).toEqual(expectedActions);
        });   
    });

    describe('fetchDataCompleted test', () => {
        it('should dispatch the correct action', () => {
            const expectedActions = [
                {
                    type: types.FETCH_DATA_COMPLETED,
                    payload: {
                        count: 1,
                        next: null,
                        hasPrevious: null,
                        queryData: []
                    }
                }
            ];

            store.dispatch(fetchDataAction.fetchDataCompleted({
                count: 1,
                next: null,
                hasPrevious: null,
                queryData: []
            }));
            expect(store.getActions()).toEqual(expectedActions);
        });   
    });

    describe('fetchDataError test', () => {
        it('should dispatch the correct action', () => {
            const expectedActions = [
                {
                    type: types.FETCH_DATA_ERROR,
                    payload: ''
                }
            ];

            store.dispatch(fetchDataAction.fetchDataError(''));
            expect(store.getActions()).toEqual(expectedActions);
        });   
    });

    describe('setSearchType test', () => {
        it('should dispatch the correct action', () => {
            const expectedActions = [
                {
                    type: types.SET_SEARCH_TYPE,
                    payload: ''
                }
            ];

            store.dispatch(fetchDataAction.setSearchType(''));
            expect(store.getActions()).toEqual(expectedActions);
        });   
    });
});