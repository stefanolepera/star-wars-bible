import { combineEpics } from 'redux-observable';
import { fetchDataEpic } from './fetchDataEpic';
import { bootstrapEpic } from './bootstrapEpic';

export default combineEpics(
    fetchDataEpic,
    bootstrapEpic
);