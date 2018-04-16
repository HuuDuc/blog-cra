import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AppContainer from 'CON/AppContainer'
import SinglePostContainer from 'CON/SinglePostContainer'
import CategoryContainer from 'CON/CategoryContainer'
import ContactContainer from 'CON/ContactContainer'
import NotFound404 from 'COM/error/NotFound404'

const router = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" pathnames={'landing'} component={AppContainer} />
        <Route exact path="/contact" pathnames={'landing'} component={ContactContainer} />
        <Route exact path="/category/:slug" pathnames={'category'} component={CategoryContainer} />
        <Route exact path="/post/:slug" pathnames={'post'} component={SinglePostContainer} />
        <Route component={NotFound404}/>
      </Switch>
    </Router>
  )
}

export default router
