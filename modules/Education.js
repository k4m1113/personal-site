import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
      <hr />
      <ul className="sub-nav">
        <li><NavLink to="/education/cal">UC Berkeley</NavLink></li>
        |
        <li><NavLink to="/education/butte">Butte College</NavLink></li>
        |
        <li><NavLink to="/education/chico">CSU Chico</NavLink></li>
      </ul>
      <hr />
      {this.props.children}
      </div>
    )
  }
})
