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
        <ul>
          <li><NavLink to="/projects/NMF_Tool">NMF Tool</NavLink></li>
          <li><NavLink to="/projects/ratchet-nail-salon">Kamilles Ratchet Nail Salon</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
