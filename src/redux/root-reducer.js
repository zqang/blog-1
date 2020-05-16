import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {connectRouter} from 'connected-react-router';

import {slideReducer} from './slide/slide.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
};

export default (history) => 
    persistReducer(
        persistConfig,
        combineReducers({
                router: connectRouter(history),
                slides: slideReducer
        })
    );

// export default combineReducers({
//     slides: slideReducer
// });