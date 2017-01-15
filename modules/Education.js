import React from 'react'
import School from './School'
import schools from '../data/schools'

export default React.createClass({
  render() {
    return (
      <div>
      <h2>Education</h2>
      {schools.map(keyword =>
        <School id={keyword} {...keyword} />
      )}
      </div>
    )
  }
})
