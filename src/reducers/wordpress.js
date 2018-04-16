import * as cons from '../constants/wordpress'
import { fromJS } from 'immutable'

const initialState = {
  wpPostList: fromJS([]),
  wpPost: fromJS({}),
}

const wordpress = (state = initialState, action) => {
  switch (action.type) {

    case cons.WP_GET_POSTS_REQUEST:
      return {
        ...state,
        wpPostList: fromJS([]),
      }
    case cons.WP_GET_POSTS_SUCCESS:
      return {
        ...state,
        wpPostList: fromJS(action.payload.data.posts),
        wpPost: fromJS({}),
      }
    case cons.WP_GET_POSTS_FAIL:
      return {
        ...state,
      }

    case cons.WP_GET_POSTS_BY_SLUG_REQUEST:
      return {
        ...state,
        wpPost: fromJS({}),
      }
    case cons.WP_GET_POSTS_BY_SLUG_SUCCESS:
      return {
        ...state,
        wpPost: fromJS(action.payload.data)
      }
    case cons.WP_GET_POSTS_BY_SLUG_FAIL:
      return {
        ...state,
      }

    case cons.WP_GET_CATEGORIES_BY_SLUG_REQUEST:
      return {
        ...state,
        wpCategory: fromJS({}),
      }
    case cons.WP_GET_CATEGORIES_BY_SLUG_SUCCESS:
      return {
        ...state,
        wpCategory: fromJS(action.payload.data)
      }
    case cons.WP_GET_CATEGORIES_BY_SLUG_FAIL:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default wordpress
