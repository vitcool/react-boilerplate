import { SagaIterator } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

import { exampleAction } from './actions';

function* exampleActionWorker(): SagaIterator {
  console.log('exampleActionWorker');
}

export default function* root(): SagaIterator {
  yield takeEvery(exampleAction, exampleActionWorker);
}
