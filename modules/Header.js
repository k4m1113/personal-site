import React from 'react'

export default React.createClass({
  render() {
    const linkedin = "https://www.linkedin.com/in/kamilledelgardo";
    const instagram = "https://www.instagram.com/kamille_with_a_k/";
    const github = "https://www.github.com/Kamilleski";
    return (
      <div>
        <br />
        <div className="header">
        <a className="green-link" href="/">
          <img src="https://lh3.googleusercontent.com/-5Kvm7cKHUUJqBga91zAQnMj1Vyu-4kPdbZ-AQC47amD=w981-h1085-no" className="portrait" alt="portrait of Kamille Delgardo"/>
        </a>
        <h1>Kamille Delgardo</h1>
        <ul className="header-nav">
          <li><a height="32px" href="mailto:kamille@delgardo.co"><img src="http://downloadicons.net/sites/default/files/encrypted-message-icon-82764.png" height="32px" alt="securely email Kamille Delgardo" /></a></li>
          <li><a href={linkedin}><img src="https://github.com/Kamilleski/personal-site/blob/master/public/icons/In-Black-66px-R.png?raw=true" height="32px" alt="Kamille Delgardo LinkedIn" /></a></li>
          <li><a href={github}><img src="https://github.com/Kamilleski/personal-site/blob/master/public/icons/github.png?raw=true" height="32px" alt="Kamille Delgardo Github" /></a></li>
          <li><a href={instagram}><img src="https://github.com/Kamilleski/personal-site/blob/master/public/icons/instagram.png?raw=true" height="32px" alt="Kamille Delgardo Instagram" /></a></li>
        </ul>
        </div>
      <hr />
      </div>

    )
  }
})
