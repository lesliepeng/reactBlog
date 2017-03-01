import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { toggleNav } from '../actions/index';

class Header extends Component {

  renderBtn() {
    const iconText = this.props.showSidebar ? "close" : "toggle" ;
      return (
        <span
          className="toggleBtn"
          onClick={this.props.toggleNav}>
          {iconText}
        </span>
    );
  }

  render() {
    return(
      <header>
        <div className="header-wrap container">
          <Link to="/" className="name"><h1>Leslie Blog</h1></Link>
          <nav className="blog-nav">
            <Link to="/posts/new" className="blog-nav-item">Add a Post</Link>
            { this.renderBtn() }
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state){
  return { showSidebar: state.style.showSidebar };
}

export default connect(mapStateToProps, { toggleNav })(Header);
