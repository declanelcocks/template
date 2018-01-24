import { call, put, fork, take } from 'redux-saga/effects'

import {
  postsFetchRequestSuccess,
  postsFetchRequestError,
  LOAD_POSTS,
} from './actions'

export function* getPosts(params) {
  try {
    const data = yield call([api, api.get], 'https://jsonplaceholder.typicode.com/posts', params)

    yield put(postsFetchRequestSuccess(data))
  } catch (e) {
    yield put(postsFetchRequestError(e))
  }
}

export function* watchLoadPostsRequest() {
  while (true) {
    const { payload } = yield take(LOAD_POSTS)
    yield call(getPosts, payload)
  }
}

export default function* postsSaga() {
  yield fork(watchLoadPostsRequest)
}
