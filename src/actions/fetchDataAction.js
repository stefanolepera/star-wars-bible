import {
	FETCH_DATA,
	FETCH_DATA_IN_PROGRESS,
	FETCH_DATA_COMPLETED,
    FETCH_DATA_ERROR,
    SET_SEARCH_TYPE
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

export const setSearchType = payload => ({
    type: SET_SEARCH_TYPE,
    payload
});