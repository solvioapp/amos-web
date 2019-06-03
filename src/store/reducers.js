import {combineReducers} from 'redux'

const req = require.context(`.`, true, /\.\/.+\/reducer\.js$/)

const reducers = req
  .keys()
  .reduce((reducer, path) => {
    const name = path.match(/\/(\w+)\//)[1]
    reducer[name] = req(path).default
    return reducer
  }, {})

export default combineReducers(reducers)
