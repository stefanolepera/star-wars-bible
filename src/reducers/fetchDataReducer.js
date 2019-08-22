import { 
    FETCH_DATA,
    FETCH_DATA_IN_PROGRESS,
    FETCH_DATA_ERROR,
    FETCH_DATA_COMPLETED,
    CLEAR_RESULTS 
} from '../actions/types';

const initialState = {
    queryValue: '',
    queryData: [],
    next: false,
    previous: false,
    count: -1,
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
                isFetchingInProgress: false,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                queryData: state.previous ? [...state.queryData, ...action.payload.results] : action.payload.results
            };
        case CLEAR_RESULTS:
            return {
                ...state,
                count: -1,
                queryData: []
            };
        default:
            return {
                ...state
            };  
    }
};