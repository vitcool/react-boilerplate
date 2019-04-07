import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/es/storage';

import reducers from './reducers';
import sagas from './sagas';
import { setIsStarted } from './modules/application/actions';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['application'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sageMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sageMiddleware)));
const persistor = persistStore(store, {}, () => store.dispatch(setIsStarted(store.getState())));

sageMiddleware.run(sagas);

export default { store, persistor };
