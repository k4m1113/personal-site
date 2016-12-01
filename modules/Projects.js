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
        Projects
        <br />
        <ul className="tech-icon">
          <li><NavLink to="/projects/NMF_Tool">NMF Tool</NavLink></li>
          <li> ＃ </li>
          <li><NavLink to="/projects/ratchet-nail-salon">Kamilles Ratchet Nail Salon</NavLink></li>
          <li> ＃ </li>
          <li><NavLink to="/projects/urbanite">Urbanite</NavLink></li>
          <li> ＃ </li>
          <li><NavLink to="/projects/Latin-Lover">Latin Lover</NavLink></li>
          <li> ＃ </li>
          <li><NavLink to="/projects/Campus-Verus">Campus Verus</NavLink></li>
          <li> ＃ </li>
          <li><NavLink to="/projects/launch-academy-challenges">Launch Academy Challenges</NavLink></li>
          <li> ＃ </li>
          <li><NavLink to="/projects/DIHTFAPSL">Do I Have Time for a Pumpkin Spice Latte?</NavLink></li>
        </ul>
        <br /><br /><br />
        {this.props.children}
      </div>
    )
  }
})
