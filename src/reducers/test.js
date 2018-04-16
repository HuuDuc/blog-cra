import * as cons from '../constants/test'
import { fromJS } from 'immutable'

const initialState = {
  number: 0,
  postList: fromJS([]),
  getPostReq: false,
  getPostSuc: false,
  getPostErr: false,
  commentList: fromJS([]),
  getCommentReq: false,
  getCommentSuc: false,
  getCommentErr: false,
}

const test = (state = initialState, action) => {
  switch (action.type) {
    case cons.ADD:
      return {
        ...state,
        number: state.number + 1,
      }

    case cons.MINUS:
      return {
        ...state,
        number: state.number - 1,
      }

    case cons.GET_POSTS_REQUEST:
      return {
        ...state,
        getPostReq: true,
        getPostSuc: false,
        getPostErr: false,
        postList: fromJS([])
      }
    case cons.GET_POSTS_SUCCESS:
      return {
        ...state,
        getPostReq: false,
        getPostSuc: true,
        getPostErr: false,
        postList: fromJS(action.payload.data)
      }
    case cons.GET_POSTS_FAIL:
      return {
        ...state,
        getPostReq: false,
        getPostSuc: false,
        getPostErr: true
      }

    case cons.GET_COMMENTS_REQUEST:
      return {
        ...state,
        getCommentReq: true,
        getCommentSuc: false,
        getCommentErr: false,
        commentList: fromJS([])
      }
    case cons.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        getCommentReq: false,
        getCommentSuc: true,
        getCommentErr: false,
        commentList: fromJS(action.payload.data)
      }
    case cons.GET_COMMENTS_FAIL:
      return {
        ...state,
        getCommentReq: false,
        getCommentSuc: false,
        getCommentErr: true
      }

    case cons.SAGA_DONE:
      console.log('SAGA done');
      return {
        ...state,
      }

    default:
      return state
  }
}

export default test
