import { FETCH_DATA, FETCH_DATA_IN_PROGRESS, FETCH_DATA_COMPLETED } from './types';

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