import { BOOTSTRAP_DATA_COMPLETED, BOOTSTRAP_DATA_ERROR } from '../actions/types';

const initialState = {
    filmsData: [],
    filmsDataError: false
};

export const bootstrapReducer = (state = initialState, action) => {
    switch(action.type) {
        case BOOTSTRAP_DATA_COMPLETED:
            return {
                ...state,
                filmsData: action.payload
            };
        case BOOTSTRAP_DATA_ERROR:
            return {
                ...state,
                filmsDataError: action.payload
            };
        default:
            return {
                ...state
            };  
    }
};