import { BOOTSTRAP_APPLICATION, BOOTSTRAP_DATA_COMPLETED, BOOTSTRAP_DATA_ERROR } from './types';

export const bootstrapApplication = () => ({
    type: BOOTSTRAP_APPLICATION
});

export const bootstrapDataCompleted = payload => ({
    type: BOOTSTRAP_DATA_COMPLETED,
    payload
});

export const bootstrapDataError = payload => ({
    type: BOOTSTRAP_DATA_ERROR,
    payload
});
