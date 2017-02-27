import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return(
    <header>
      <div className="header-wrap container">
        <nav className="blog-nav">
          <Link to="#" className="blog-nav-item name">Leslie Blog</Link>
          <Link to="/posts/new" className="blog-nav-item">Add a Post</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
