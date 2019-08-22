import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger'
import { getData } from '../services/APIService';
import rootReducers from "../reducers";
import rootEpics from '../epics';

const epicMiddleware = createEpicMiddleware({
	dependencies: { getData: getData }
});

const logger = createLogger({
  	collapsed: true
});

const store = createStore(
	rootReducers,
  	{},
	composeWithDevTools(
		applyMiddleware(epicMiddleware, logger),
	)
);

epicMiddleware.run(rootEpics);

export default store;