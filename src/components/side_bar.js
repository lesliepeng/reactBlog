import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTags } from '../actions/index';
import { Link } from 'react-router';

class SideBar extends Component {
  componentWillMount() {
    this.props.fetchTags();
  }
  renderTags() {
    return this.props.tags.map((tag) => {
      return (
        <li className="tag-list-item" key={tag.key}>
          <p>{ tag.key }<span>{ tag.value }</span></p>
        </li>
      )
    })
  }
  render() {
    return (
      <div className={`col-sm-3 side-bar blog-sidebar ${ this.props.styleName }`}>
        <div className="profile sidebar-module">
          <img className="img-circle" src="../../image/me.jpg" />
          <h3>关于我</h3>
          <p>
            爱写代码的产品一枚。
            <hr />
            在这里记录生活，学习和工作心得，也偶尔搬运好文。
          </p>
        </div>
        <div className="category-list sidebar-module">
          <h3>标签</h3>
          <ul className="tag-list">
            {this.renderTags()}
          </ul>
        </div>
        <div class="sidebar-module">
          <h3>Elsewhere</h3>
          <ol class="list-unstyled">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ol>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state){
  return { tags: state.tags.all };
}

export default connect(mapStateToProps, { fetchTags })(SideBar);
