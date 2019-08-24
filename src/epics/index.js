import { combineEpics } from 'redux-observable';
import { fetchDataEpic } from './fetchDataEpic';
import { bootstrapEpic } from './bootstrapEpic';
import { infiniteScrollEpic } from './infiniteScrollEpic';

export default combineEpics(
    fetchDataEpic,
    bootstrapEpic,
    infiniteScrollEpic
);