import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'

class SinglePost extends Component {

  componentDidMount() {
    const slug = this.props.match.params.slug
    this.props.getPostySlug(slug)
  }

  render() {

    let categories = []
    let excerpt;
    let modifiedAt;
    let content;
    let title;
    const { wpPost } = this.props

    if (wpPost.size > 0) {
      excerpt = wpPost.get('excerpt')
      categories = wpPost.get('categories').toArray()[0]
      modifiedAt = Moment(wpPost.get('modified')).format('MMMM DD, YYYY')
      content = wpPost.get('content')
      title = wpPost.get('title')
    }

    return (
      <div>

        {
          wpPost.size > 0 ?
          [
            <section key="header" className="section">
              <div className="container">
                <Link to="/">back</Link>
                <p>{modifiedAt} | <Link to={`/category/${categories.get('slug')}`}>{categories.get('name')}</Link></p>
                <h1 className="title">{title}</h1>
                <h2
                  className="subtitle"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
              </div>
            </section>
            ,
            <section key="content" className="section">
              <div className="container">
                <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </section>
          ]
          :
          <div>loading</div>
        }

      </div>
    )
  }

}

export default SinglePost
