import {SET_ERRORS, SET_IS_AUTH} from './actions'
import {createReducer} from 'common/utils'
import {set} from 'common/lens'

const initialState = {
  errors: [],
  isAuthenticated: false,
}

const authReducer = createReducer(
  initialState,
  [SET_ERRORS, ({value}) => set(`errors`, value)],
  [SET_IS_AUTH, ({value}) => set(`isAuthenticated`, value)],
)

export default authReducer
