import clients from '../clients'
import { multiClientMiddleware } from 'redux-axios-middleware'

const options = {
  onComplete: result => {
    if (result.action !== undefined) {
      if (typeof result.action.meta.previousAction.continuousActions === 'object') {
        const nextActions = result.action.meta.previousAction.continuousActions
        nextActions.forEach(action => {
          result.dispatch(action())
        })
      }
    }
  },
  onError: result => {
    result.dispatch({
      type: `${result.action.type}_FAIL`,
    })
  }
};

const axiosMiddleWare = () => multiClientMiddleware(clients, options)

export default axiosMiddleWare
