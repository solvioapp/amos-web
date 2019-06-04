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
