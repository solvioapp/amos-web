import {authorize} from 'store/auth/actions'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsAuthenticated} from 'store/auth/selectors'
import {withRouter} from "react-router"

const props = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
})

const actions = {
  authorize,
}

export default compose(
  connect(props, actions),
  withRouter
)
