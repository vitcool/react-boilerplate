import { SagaIterator } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

import { fetchPostsRequest, fetchPostsFailed, fetchPostsSuccess } from './actions';
import { getRequest } from 'api';

const fetchPostsData = () => getRequest('/posts');

function* fetchPostsRequestWorker(): SagaIterator {
  try {
    const response = yield call(fetchPostsData);
    if (response.ok) {
      const data = yield call([response, response.json]);
      yield put(fetchPostsSuccess(data));
    } else {
      yield put(fetchPostsFailed('Fetching is failed'));
    }
  } catch (error) {
    yield put(fetchPostsFailed(error.toString()));
  }
}

export default function* root(): SagaIterator {
  yield takeEvery(fetchPostsRequest, fetchPostsRequestWorker);
}
