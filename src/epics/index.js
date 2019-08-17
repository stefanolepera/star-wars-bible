import { combineEpics } from 'redux-observable';
import { fetchDataEpic } from './fetchDataEpic';

export default combineEpics(
    fetchDataEpic
);