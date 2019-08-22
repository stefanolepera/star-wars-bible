import {
	FETCH_DATA,
	FETCH_DATA_IN_PROGRESS,
	FETCH_DATA_COMPLETED,
	FETCH_DATA_ERROR,
	CLEAR_RESULTS 
} from './types';

export const fetchData = payload => ({
    type: FETCH_DATA,
    payload
});

export const fetchDataInProgress = payload => ({
    type: FETCH_DATA_IN_PROGRESS,
    payload
});

export const fetchDataCompleted = payload => ({
    type: FETCH_DATA_COMPLETED,
    payload
});

export const fetchDataError = payload => ({
    type: FETCH_DATA_ERROR,
    payload
});

export const clearResults = () => ({
    type: CLEAR_RESULTS
});