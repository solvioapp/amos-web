import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsAuthenticated} from 'store/auth/selectors'

const props = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
})

export default connect(props)
