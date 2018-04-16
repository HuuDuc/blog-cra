import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAction, minusAction } from '../actions/test'
import Contact from '../components/Contact'

const ContactContainer = connect(
  state => ({
    number: state.test.number
  }),
  dispatch => bindActionCreators({
    addAction,
    minusAction
  }, dispatch)
)(Contact)

export default ContactContainer
