import React from 'react'
import ReactDOM from 'react-dom'
import router from './routes'
import reducers from './reducers'
import mySaga from './sagas'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import axiosMiddleWare from './middlewares/axios'

import './style/index.scss'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(axiosMiddleWare()),
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    {router()}
  </Provider>
  ,
  document.getElementById('root')
)
