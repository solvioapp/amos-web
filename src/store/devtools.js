const ext = `__REDUX_DEVTOOLS_EXTENSION__`
const isDev = process.env.NODE_ENV === `development`

const devtools = isDev && window[ext]
  ? window[ext]
  : () => fn => fn

export default devtools
