import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable';
import rootReducers from "../reducers";
import rootEpics from '../epics';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(
    applyMiddleware(epicMiddleware),
  )
);

epicMiddleware.run(rootEpics);

export default store;