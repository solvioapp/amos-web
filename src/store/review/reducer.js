import {DONT_BE_EVIL} from './actions'
import {createReducer} from 'common/utils'
import {set} from 'common/lens'

const initialState = {
  slogan: `⚡ Just Do It.`
}

const dontBeEvil = () => set(`slogan`, `Be good!`)

const reviewReducer = createReducer(
  initialState,
  [DONT_BE_EVIL, dontBeEvil],
)

export default reviewReducer
