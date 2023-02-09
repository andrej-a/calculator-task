import { combineReducers,createStore } from 'redux';
import { persistReducer,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer, { theme_reducer } from './reducers/reducer';

const rootReducer = combineReducers({
    main: reducer,
    theme: theme_reducer,
});
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['main']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);
