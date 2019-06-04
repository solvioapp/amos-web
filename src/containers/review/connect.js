import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectSlogan} from 'store/review/selectors'

const props = createStructuredSelector({
  slogan: selectSlogan,
})

export default connect(props)
