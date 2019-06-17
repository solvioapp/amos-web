import {DONT_BE_EVIL} from './actions'
import {createReducer} from 'common/utils'
import {set} from 'common/lens'

const initialState = {
  slogan: `🍏 Think Different.`
}

const dontBeEvil = () => set(`slogan`, `Be good!`)

const proposalReducer = createReducer(
  initialState,
  [DONT_BE_EVIL, dontBeEvil],
)

export default proposalReducer
