// https://github.com/diegohaz/arc/wiki/Selectors#unit-testing-selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({})
})

test('selectModalOpen', () => {
  expect(selectors.selectModalOpen(undefined, 'test')).toBe(false)
  expect(selectors.selectModalOpen({}, 'test')).toBe(false)
  expect(selectors.selectModalOpen(selectors.initialState, 'test')).toBe(false)
  expect(selectors.selectModalOpen({ test: false }, 'test')).toBe(false)
  expect(selectors.selectModalOpen({ test: true }, 'test')).toBe(true)
})
