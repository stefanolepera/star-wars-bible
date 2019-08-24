import { 
    FETCH_DATA,
    FETCH_DATA_IN_PROGRESS,
    FETCH_DATA_ERROR,
    FETCH_DATA_COMPLETED
} from '../actions/types';

const initialState = {
    queryValue: '',
    queryData: [],
    next: '',
    count: -1,
    hasPrevious: false,
    isFromSearch: false,
    isFetchingInProgress: false,
    isFetchingError: ''
};

export const fetchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                queryValue: action.payload.url,
                isFromSearch: action.payload.fromSearch
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
                count: action.payload.count,
                next: action.payload.next,
                hasPrevious: action.payload.previous !== null,
                isSinglePage: action.payload.next === null && action.payload.previous === null,
                queryData: action.payload.previous ? [...state.queryData, ...action.payload.results] : action.payload.results
            };
        default:
            return {
                ...state
            };  
    }
};