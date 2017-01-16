import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Projects from './Projects'
import Project from './Project'
import Education from './Education'
import Home from './Home'
import School from './School'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="/projects" component={Projects}>
      <Route path="/projects/:id" component={Project}/>
    </Route>
    <Route path="/about" component={About}/>
    <Route path="/education" component={Education}>
      <Route path="/education/:id" component={School}/>
    </Route>
  </Route>
)
