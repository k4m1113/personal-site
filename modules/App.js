import React from 'react'
import NavLink from './NavLink'
import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <ul className="nav">
          <li><NavLink to="/about">About</NavLink></li>|
          <li><NavLink to="/projects">Projects</NavLink></li>|
          <li><NavLink to="/education">Education</NavLink></li>
        </ul>
        {this.props.children}
        <Footer />
      </div>
    )
  }
})
