import {connect} from 'react-redux'
import {setIsAuth} from 'store/auth/actions'

const actions = {
  login: () => setIsAuth(true),
}

export default connect(null, actions)
