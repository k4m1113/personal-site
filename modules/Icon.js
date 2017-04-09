import React from 'react';
import icons from '../data/icons'

export default React.createClass({
  render() {
    const { id, technology, name, url, fa } = this.props
    const current = icons.filter((icon) => icon.id === this.props.technology)[0];
    return (
      <li>
        <a href={current.url}>
          <i className={current.fa} title={current.name} aria-hidden="true"></i>
        </a>
      </li>
    );
  }
})
