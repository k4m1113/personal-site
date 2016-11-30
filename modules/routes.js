import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Projects from './Projects'
import Project from './Project'
import Writing from './Writing'
import Education from './Education'
import Home from './Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/projects" component={Projects}>
      <Route path="/projects/:id" component={Project}/>
    </Route>
    <Route path="/about" component={About}/>
    <Route path="/writing" component={Writing}/>
    <Route path="/education" component={Education}/>
  </Route>
)
