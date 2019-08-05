import * as R from 'ramda'

const lens = R.ifElse(
  R.is(String),
  R.lensProp,
  R.lensPath
)

/*
const list = [
  {emoji: `likes`, count: 13},
  {emoji: `dislikes`, count: 5},
  {emoji: `poo`, count: 2},
]

const update = assemble(
  R.pipe(
    R.last,
    R.over(R.lensProp(`count`), R.inc),
  )
  R.dropLast,
  (last, tail) => R.append(tail, last)
)

update(list)
*/
export const assemble = (...fns) => data => {
  const [main, ...inputs] = R.reverse(fns)
  const args = R.map(fn => fn(data), inputs)
  return main(...args)
}

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
