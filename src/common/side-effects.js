import * as R from 'ramda'

const API_URL = `https://solvio.org`

export const asyncPipe = (...fns) => fns.reduce(
  (prev, next) => (...args) => {
    const result = prev(...args)

    return R.is(Promise, result)
      ? result.then(x => next(x))
      : Promise.resolve(next(result))
  }
)

export function fetchData(query) {
  const opts = {
    method: `POST`,
    headers: {"Content-Type": `application/json`},
    body: JSON.stringify({query: `{${query}}`})
  }

  return fetch(API_URL, opts)
    .then(res => res.json())
    .catch(err => console.error(err))
}
