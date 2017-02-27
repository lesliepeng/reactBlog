import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

import showdown, { Converter } from 'showdown';
import tocbot from 'tocbot';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  initToc() {
      tocbot.init({
        // Where to render the table of contents.
        tocSelector: '.js-toc',
        // Where to grab the headings to build the table of contents.
        contentSelector: '.js-toc-content',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h1, h2, h3',
      });
    }



  render() {
    const { post } = this.props;
    //const post = this.props.post;

    if(!post) {
      return <div>Loading..</div>;
    }

    return (
      <div className="container">
        <ul className="js-toc">
          {this.initToc.bind(this)}
        </ul>
        <div className="blog-post-detail">
          <Link to='/'>Back to index</Link>
            <h1 className="blog-post-title">{post.title}</h1>
            <div
              className="js-toc-content blog-post-content"
              dangerouslySetInnerHTML={{__html:new Converter().makeHtml(post.content)}}>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps,{ fetchPost, deletePost })(PostsShow);
