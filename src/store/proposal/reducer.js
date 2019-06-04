import {DONT_BE_EVIL} from './actions'
import {set} from 'common/lens'

const initialState = {
  slogan: `🍏 Think Different.`
}

function proposalReducer(state = initialState, action) {
  switch (action.type) {
    case DONT_BE_EVIL: {
      return set(`slogan`, `Be good!`)
    }
    default: return state
  }
}

export default proposalReducer
