import { all } from 'redux-saga/effects';
import application from './modules/application/saga';

export default function* root() {
  yield all([application()]);
}
