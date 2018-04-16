import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Contact
            </h1>
            <h2 className="subtitle">
              <Link to="/">back</Link>
            </h2>
          </div>
        </div>
      </section>
    )
  }

}

export default Contact
