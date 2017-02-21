import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return(
    <header className="main-header">
      <div className="container">
        <a className="blog-name">Jettie Blog</a>
        <div>
          <Link to="/posts/new">
            Add a Post
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
