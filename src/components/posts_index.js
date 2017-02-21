import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import PostTag from './post_tag';
import SideBar from './side_bar';


class PostsIndex extends Component {
  constructor(props) {
      super(props);

      this.state = { page: 0 };

      this.nextPage = this.nextPage.bind(this);
      this.previousPage = this.previousPage.bind(this);
    }


  componentWillMount() {
    this.props.fetchPosts(this.state.page);
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="post-list-item" key={post.objectId}>
            <PostTag tag={post.categories} />
            <h2 className="blog-title">{post.title}</h2>
            <h5 className="blog-pubdate">{post.pubDate}</h5>
            <p className="blog-content">{post.content.slice(0,100)}</p>
            <Link to={"posts/" + post.objectId} className="read-more">阅读全文</Link>
        </li>
      )
    })
  }

  nextPage() {
    const page = this.state.page + 1;

    this.props.fetchPosts(page);

    this.setState({ page });

    console.log(page);
  }

  previousPage() {
    const page = this.state.page < 1 ? this.state.page - 1 : 0;

    this.props.fetchPosts(page);

    this.setState({ page });

    console.log(page);

  }

  render() {
    return (
      <div className="container content-box">
        <SideBar />
        <div className="post-index">
          <ul className="post-list">
            {this.renderPosts()}
          </ul>
        </div>
        <a onClick={this.nextPage}>
          下一页
        </a>
        <a onClick={this.previousPage}>
          上一页
        </a>
      </div>


    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
