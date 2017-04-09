import React from 'react'
import projects from '../data/projects'
import icons from '../data/icons'
import Icon from './Icon'

export default React.createClass({
  render() {
    const { id, name, url, deployment, description, type, keywords } = this.props.params
    const project = projects.filter((project) => project.id === id)[0];
    return (
      <div className="container">
        <h2>{project.name}</h2>
        <p>Type: {project.type} ☞ <a href={project.deployment}>See it Live</a></p>
        <p>{project.description}</p>
        <p>Technologies Used:</p>
        <ul className="tech-icon">
        {
          project.keywords.map((keyword, i) => <Icon technology={keyword} {...keyword} />)
        }
        </ul>
      </div>
    )
  }
})
