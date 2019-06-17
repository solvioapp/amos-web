import {DONT_BE_EVIL} from './actions'
import {createReducer} from 'common/utils'
import {set} from 'common/lens'

const initialState = {
  slogan: `😇 Don't be evil.`
}

const dontBeEvil = () => set(`slogan`, `Be good!`)

const searchReducer = createReducer(
  initialState,
  [DONT_BE_EVIL, dontBeEvil],
)

export default searchReducer
