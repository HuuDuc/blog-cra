import * as cons from '../constants/test'

export const addAction = () => {
  return {
    type: cons.ADD,
  }
}

export const minusAction = () => {
  return {
    type: cons.MINUS,
  }
}

export const getComment = () => {
  return {
    type: cons.GET_COMMENTS,
    payload: {
      request:{
        url:'/comments'
      }
    }
  }
}

export const getPost = () => {
  return {
    type: cons.GET_POSTS,
    payload: {
      request:{
        url:'/posts'
      }
    },
    continuousActions: [getComment]
  }
}
