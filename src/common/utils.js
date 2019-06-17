import * as R from 'ramda'

const toReducer = ([actionType, reducer]) => ([action, state]) => {
  if (actionType === action.type) {
    const result = reducer(action, state)
    const newState = R.is(Function, result) ? result(state) : result
    return [action, newState]
  }
  return [action, state]
}

export const createReducer = (initialState, ...reducers) => R.pipe(
  (state, action) => [action, state || initialState],
  ...reducers.map(toReducer),
  R.last
)

export function makeCacheable(fn) {
  const cache = {}
  return async key => {
    if (!cache[key]) {
      cache[key] = await fn(key)
    }
    return cache[key]
  }
}

export const round = value => (
  parseFloat(value.toFixed(2))
)
