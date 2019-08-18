import { combineReducers } from 'redux';
import { fetchDataReducer } from './fetchDataReducer';
import { bootstrapReducer } from './bootstrapReducer';

export default combineReducers({
    bootstrap: bootstrapReducer,
    data: fetchDataReducer
});
