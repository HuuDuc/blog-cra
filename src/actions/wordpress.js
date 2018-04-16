import * as cons from '../constants/wordpress'
import qs from 'qs'

export const getAllPost = (data = {}) => {
  return {
    type: cons.WP_GET_POSTS,
    payload: {
      request:{
        url: `/posts?${qs.stringify(data)}`
      }
    }
  }
}

export const getPostySlug = (slug) => {
  return {
    type: cons.WP_GET_POSTS_BY_SLUG,
    payload: {
      request:{
        url: `/posts/slug:${slug}`
      }
    }
  }
}

export const getCategoryBySlug = (slug) => {
  return {
    type: cons.WP_GET_CATEGORIES_BY_SLUG,
    payload: {
      request:{
        url: `/categories/slug:${slug}`
      }
    }
  }
}
