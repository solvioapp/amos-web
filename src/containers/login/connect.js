import {authorize} from 'store/auth/actions'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsAuthenticated, selectErrors} from 'store/auth/selectors'

const props = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
  errors: selectErrors,
})

const actions = {
  authorize,
}

export default connect(props, actions)
