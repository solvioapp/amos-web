import {SET_IS_AUTH} from './actions'
import {createReducer} from 'common/utils'
import {set} from 'common/lens'

const initialState = {
  isAuthenticated: false,
}

const setIsAuth = action => set(`isAuthenticated`, action.value)

const authReducer = createReducer(
  initialState,
  [SET_IS_AUTH, setIsAuth],
)

export default authReducer
