import React from 'react'

export default React.createClass({
  render() {
    const { id, name, url, deployment, description, type, keywords } = this.props.params
    return (
      <div>
        <h2>{id}</h2>
      </div>
    )
  }
})
