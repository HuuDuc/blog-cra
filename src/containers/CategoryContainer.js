import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllPost } from '../actions/wordpress'
import Category from '../components/Category'

const CategoryContainer = connect(
  state => ({
    wpPostList: state.wordpress.wpPostList,
  }),
  dispatch => bindActionCreators({
    getAllPost,
  }, dispatch)
)(Category)

export default CategoryContainer
