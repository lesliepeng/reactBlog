import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import PostTag from './post_tag';
import SideBar from './side_bar';


class PostsIndex extends Component {
  constructor(props) {
      super(props);

      this.state = { page: 0, showSidebar: this.props.showSidebar };

      this.nextPage = this.nextPage.bind(this);
      this.previousPage = this.previousPage.bind(this);
    }


  componentWillMount() {
    this.props.fetchPosts(this.state.page);
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div className="blog-post" key={post.objectId}>
            <PostTag tag={post.categories} />
            <h2 className="blog-post-title">{post.title}</h2>
            <h5 className="blog-post-meta">{post.pubDate}</h5>
            <p className="blog-post-sum">{post.content.slice(0,100)}</p>
            <Link to={"posts/" + post.objectId} className="read-more">阅读全文</Link>
        </div>
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
      <div className="container">
        <div className="row">
          <div className="col-sm-8 blog-main">
                {this.renderPosts()}
            <nav>
              <ul className="pager">
                <li><a onClick={this.nextPage}>下一页</a></li>
                <li><a onClick={this.previousPage}>上一页</a></li>
              </ul>
            </nav>
          </div>
          <SideBar styleName={this.props.showSidebar ? "showSidebar" : "hideSidebar"}/>
        </div>
      </div>


    );
  }
}

function mapStateToProps(state){
  console.log("state.style.showSidebar is:");
  console.log(state.style.showSidebar);
  return { posts: state.posts.all, showSidebar: state.style.showSidebar };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
