import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostySlug } from '../actions/wordpress'
import SinglePost from '../components/SinglePost'

const SinglePostContainer = connect(
  state => ({
    wpPost: state.wordpress.wpPost,
  }),
  dispatch => bindActionCreators({
    getPostySlug,
  }, dispatch)
)(SinglePost)

export default SinglePostContainer
