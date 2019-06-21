import {connect} from 'react-redux'
import {logout} from 'store/auth/actions'

const actions = {
  logout,
}

export default connect(null, actions)
