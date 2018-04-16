import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllPost } from '../actions/wordpress'
import App from '../components/App'

const AppContainer = connect(
  state => ({
    wpPostList: state.wordpress.wpPostList,
  }),
  dispatch => bindActionCreators({
    getAllPost,
  }, dispatch)
)(App)

export default AppContainer
