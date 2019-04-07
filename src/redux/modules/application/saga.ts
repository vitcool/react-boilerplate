import { SagaIterator } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

import { setIsStarted } from './actions';

function* setIsStartedActionWorker(): SagaIterator {
  console.log('setIsStartedActionWorker');
}

export default function* root(): SagaIterator {
  yield takeEvery(setIsStarted, setIsStartedActionWorker);
}
