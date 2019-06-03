import * as R from 'ramda'

const lens = R.ifElse(
  R.is(String),
  R.lensProp,
  R.lensPath
)

export const reshape = R.curry((shape, object) =>
  R.mapObjIndexed(
    fn => R.is(Array, fn) ? R.pipe(...fn)(object) : fn(object),
    shape
  )
)

export const set = R.curry((path, value, state) =>
  R.set(
    lens(path),
    value, state
  )
)
