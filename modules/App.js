import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
      <link href='/public/icons/javascript.png'/>

        <h1>Kamille Delgardo</h1>
        <ul className="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/writing">Writing</NavLink></li>
          <li><NavLink to="/education">Education</NavLink></li>
        </ul>
        <br />
        <br />
        <br />
        {this.props.children}
      </div>
    )
  }
})
