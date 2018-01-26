import { call, fork, put, take } from 'redux-saga/effects'

import saga, * as sagas from './sagas'
import {
  LOAD_POSTS,
  postsFetchRequestSuccess,
  postsFetchRequestError,
} from './actions'

describe('saga', () => {
  it('forks the correct watchers', () => {
    const generator = saga()

    expect(generator.next().value)
      .toEqual(fork(sagas.watchLoadPostsRequest))
  })
})

describe('watchLoadPostsRequest', () => {
  it('watches for the correct actions', () => {
    const generator = sagas.watchLoadPostsRequest()
    const payload = { params: { id: 1 } }

    expect(generator.next().value)
      .toEqual(take(LOAD_POSTS))
    expect(generator.next({ payload }).value)
      .toEqual(call(sagas.getPosts, payload))
  })
})

describe('getPosts', () => {
  it('calls success', () => {
    const payload = { params: { id: 1 } }
    const result = [1, 2, 3]
    const generator = sagas.getPosts(payload)

    expect(generator.next().value).toEqual(
      call([api, api.get], 'https://jsonplaceholder.typicode.com/posts', payload)
    )

    expect(generator.next(result).value)
      .toEqual(put(postsFetchRequestSuccess(result)))
  })

  it('calls failure', () => {
    const payload = { params: { id: 1 } }
    const generator = sagas.getPosts(payload)

    expect(generator.next().value).toEqual(
      call([api, api.get], 'https://jsonplaceholder.typicode.com/posts', payload)
    )

    expect(generator.throw('error').value)
      .toEqual(put(postsFetchRequestError('error')))
  })
})
