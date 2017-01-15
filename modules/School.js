import React from 'react'
import schools from '../data/schools'

export default React.createClass({
  render() {
    const { id, name, location, honors, url, degree, summary, attendanceDates, subjects } = this.props.params
    const school = schools.filter((school) => school.id === id)[0];
    return (
      <div>
        <h2><a href={school.url}>{school.name}</a></h2>
        {school.location} <br />
        {school.attendanceDates} <br />
        {school.degree} <br />
        Studied: <br />
        {school.summary} <br />
      </div>
    )
  }
})
