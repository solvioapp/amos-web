import {DONT_BE_EVIL} from './actions'
import {set} from 'common/lens'

const initialState = {
  slogan: `⚡ Just Do It.`
}

function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case DONT_BE_EVIL: {
      return set(`slogan`, `Be good!`)
    }
    default: return state
  }
}

export default reviewReducer
