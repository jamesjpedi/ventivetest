import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store)

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
    return store.getState();
};
export {
    getStore,
    getState,
    getPersistor
};
export default {
    getStore,
    getState,
    getPersistor
}