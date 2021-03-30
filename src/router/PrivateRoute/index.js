import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'

const mapDispatchToProps = {}

const mapStateToProps = state => ({
  token: state.auth.token
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
