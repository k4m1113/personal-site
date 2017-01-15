import React from 'react'

export default React.createClass({
  render() {
    const linkedin = "https://www.linkedin.com/in/kamilledelgardo";
    const instagram = "https://www.instagram.com/kamille_with_a_k/";
    const github = "https://www.github.com/Kamilleski";
    return (
      <div>
        <h1>Kamille Delgardo</h1>
        <ul className="header-nav">
          <li><a href={linkedin}> <img src="" alt="" /></a></li>|
          <li><a href={github} /></li>|
          <li><a href={instagram} /></li>
        </ul>
      <hr />
      </div>

    )
  }
})
