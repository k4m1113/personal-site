import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const id = event.target.elements[0].value
    const path = `/projects/${id}`
    this.context.router.push(path)
  },

  render() {
    return (
      <div>
        <hr />
        <ul className="nav">
          <li><NavLink to="/projects/NMF_Tool">NMF Tool</NavLink></li>
          |
          <li><NavLink to="/projects/ratchet-nail-salon">Kamilles Ratchet Nail Salon</NavLink></li>
          |
          <li><NavLink to="/projects/urbanite">Urbanite</NavLink></li>
          |
          <li><NavLink to="/projects/DIHTFAPSL">DIHTFAPSL?</NavLink></li>
          |
          <li><NavLink to="/projects/Latin-Lover">Latin Lover</NavLink></li>
          |
          <li><NavLink to="/projects/Campus-Verus">Campus Verus</NavLink></li>
          |
          <li><NavLink to="/projects/launch-academy-challenges">Launch Academy Challenges</NavLink></li>
        </ul>
        <hr />
        <br />
        {this.props.children}
      </div>
    )
  }
})
