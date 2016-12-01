import React from 'react';
import icons from '../data/icons'

export default React.createClass({
  render() {
    const { id, technology, name, url, icon } = this.props
    const keyword = icons.filter((icon) => icon.id === this.props.technology)[0];

    const img_serv_url = `https://raw.githubusercontent.com/Kamilleski/personal-site/master/public/icons/${keyword.id}.png`
    return (
      <li>
        <img src={img_serv_url} title={this.props.technology} alt={this.props.technology} />
      </li>
    );
  }
})
