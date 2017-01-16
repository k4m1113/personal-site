import React from 'react'
import schools from '../data/schools'

export default React.createClass({
  render() {
    const { id, name, location, honors, url, degree, summary, attendanceDates, subjects } = this.props.params
    const school = schools.filter((school) => school.id === id)[0];
    return (
      <div className= "container">
        <h2><a href={school.url}>{school.name}</a></h2>
        <i>{school.honors.join(", ")}</i><br />
        <p>{school.location} ✼ {school.attendanceDates} ✼ {school.degree} </p>
        <b>Studied:</b> {school.subjects.join(", ")}<br />
        {school.summary} <br />
      </div>
    )
  }
})
