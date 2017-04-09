import React from 'react'

export default React.createClass({
  render() {
    const linkedin = "https://www.linkedin.com/in/kamilledelgardo";
    const instagram = "https://www.instagram.com/kamillamagna/";
    const github = "https://www.github.com/kamillamagna";
    const twitter = "https://www.github.com/kamillamagna";
    const meetup = "";
    return (
      <div>
        <br />
        <div className="header">
          <a className="green-link" href="/">
            <img src="https://lh3.googleusercontent.com/-5Kvm7cKHUUJqBga91zAQnMj1Vyu-4kPdbZ-AQC47amD=w981-h1085-no" className="portrait" alt="portrait of Kamille Delgardo"/>
          </a>
          <h1>Kamille Delgardo</h1>
          <ul className="header-nav">
            <li>
              <a href="mailto:kamille@delgardo.co">
                <i className="fa fa-envelope-o" title="securely email Kamille Delgardo" aria-hidden="true">
                </i>
              </a>
            </li>
            <li>
              <a href={linkedin}>
                <i className="fa fa-linkedin" title="Kamille Delgardo LinkedIn" aria-hidden="true">
                </i>
              </a>
            </li>
            <li>
              <a href={github}>
                <i className="fa fa-github-alt" title="Kamille Delgardo Github" aria-hidden="true">
                </i>
              </a>
            </li>
            <li>
              <a href={meetup}>
                <i className="fa fa-meetup" title="Kamille Delgardo Meetup" aria-hidden="true">
                </i>
              </a>
            </li>
            <li>
              <a href={twitter}>
                <i className="fa fa-twitter" title="Kamille Delgardo Twitter" aria-hidden="true">
                </i>
              </a>
            </li>
            <li>
              <a href={instagram}>
                <i className="fa fa-instagram" title="Kamille Delgardo Instagram" aria-hidden="true">
                </i>
              </a>
            </li>
          </ul>
        </div>
        <hr />
      </div>

    )
  }
})
