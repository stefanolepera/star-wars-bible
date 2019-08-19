import { FETCH_DATA, FETCH_DATA_IN_PROGRESS, FETCH_DATA_ERROR, FETCH_DATA_COMPLETED } from '../actions/types';

const initialState = {
    queryValue: '',
    queryData: [],
    next: false,
    isFetchingInProgress: false,
    isFetchingError: ''
};

export const fetchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                queryValue: action.payload
            };
        case FETCH_DATA_IN_PROGRESS:
            return {
                ...state,
                isFetchingInProgress: action.payload
            };
        case FETCH_DATA_ERROR:
            return {
                ...state,
                isFetchingError: action.payload
            };
        case FETCH_DATA_COMPLETED:
            return {
                ...state,
                next: action.payload.next,
                isFetchingInProgress: false,
                queryData: action.payload.next ? [...state.queryData, ...action.payload.results] : action.payload.results
            };
        default:
            return {
                ...state
            };  
    }
};