import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
// import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import sagas from './sagas';

const sageMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sageMiddleware)));
const persistor = persistStore(store);
sageMiddleware.run(sagas);

export const config = { store, persistor };
