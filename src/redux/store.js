import { combineReducers,createStore } from 'redux';
import { persistReducer,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import historyReducer from './reducers/history';
import reducer from './reducers/reducer';
import themeReducer from './reducers/theme';

const rootReducer = combineReducers({
    expression: reducer,
    theme: themeReducer,
    historyStore: historyReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['expression', 'historyStore']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
    persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);
