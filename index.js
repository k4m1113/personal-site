import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/routes'
import App from './modules/App'

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)
