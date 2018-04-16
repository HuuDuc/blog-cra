import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Moment from 'moment'

class Category extends Component {

  componentDidMount() {
    const slug = this.props.match.params.slug
    this.props.getAllPost({
      category: slug
    })
  }

  render() {

    return (
      <div className="container">
        <Link to="/">Back</Link>
        {
          this.props.wpPostList.size > 0 && this.props.wpPostList.map((post, i) => {
            const title = post.get('title')
            return (
              <section className="section">
                <h4 className="title is-4">{title}</h4>
              </section>
            )
          })
        }

      </div>
    )
  }

}

export default Category
