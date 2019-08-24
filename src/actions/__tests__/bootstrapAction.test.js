import configureStore from 'redux-mock-store';
import * as bootstrapAction from '../bootstrapAction';
import * as types from '../types';

const mockStore = configureStore();
const store = mockStore();

describe('bootstrapAction test', () => {
    beforeEach(() => {
        store.clearActions();
    });
    
    describe('bootstrapApplication test', () => {
        it('should dispatch the correct action', () => {
            const expectedActions = [
                {
                    type: types.BOOTSTRAP_APPLICATION
                }
            ];

            store.dispatch(bootstrapAction.bootstrapApplication());
            expect(store.getActions()).toEqual(expectedActions);
        });   
    });

    describe('bootstrapDataCompleted test', () => {
        it('should dispatch the correct action', () => {
            const expectedActions = [
                {
                    type: types.BOOTSTRAP_DATA_COMPLETED,
                    payload: []
                }
            ];

            store.dispatch(bootstrapAction.bootstrapDataCompleted([]));
            expect(store.getActions()).toEqual(expectedActions);
        });   
    });

    describe('bootstrapDataError test', () => {
        it('should dispatch the correct action', () => {
            const expectedActions = [
                {
                    type: types.BOOTSTRAP_DATA_ERROR,
                    payload: true
                }
            ];

            store.dispatch(bootstrapAction.bootstrapDataError(true));
            expect(store.getActions()).toEqual(expectedActions);
        });   
    });

    describe('scrollEventListener test', () => {
        it('should dispatch the correct action', () => {
            const expectedActions = [
                {
                    type: types.SCROLL_EVENT_LISTENER
                }
            ];

            store.dispatch(bootstrapAction.scrollEventListener());
            expect(store.getActions()).toEqual(expectedActions);
        });   
    });
});