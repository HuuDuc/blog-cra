import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.getAllPost()
  }

  render() {

    const { wpPostList } = this.props;

    return (
      <section className="hero is-fullheight is-warning">
        <div className="hero-body columns">
          <div className="column is-2">
            <h1 className="title">
              Demo
            </h1>
            <h2 className="subtitle">
              <Link to="/contact">go to contact</Link>
            </h2>
          </div>
          <div className="column is-2">
            <div>
              <button className="button" onClick={this.add}>+</button>
              <button className="button" onClick={this.minus}>-</button>
            </div>
          </div>
          <div className="column is-2">
            <h3 className="title is-3">{this.props.number}</h3>
          </div>

        </div>
        {
          wpPostList.size ?
          <div>
            {
              wpPostList.map((post, i) => {
                return (
                  <div key={i}>
                    <Link to={`/post/${post.get('slug')}`}>{post.get('title')}</Link>
                  </div>
                )
              })
            }
          </div>
          :
          <div>loading</div>
        }
      </section>
    )
  }

}

export default App
