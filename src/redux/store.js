import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import {createBrowserHistory} from 'history';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

export const history = createBrowserHistory();

const middlewares = [logger, routerMiddleware(history) ];

export const store = createStore(
    rootReducer(history), 
    applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
