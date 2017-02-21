import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTags } from '../actions/index';
import { Link } from 'react-router';

class SideBar extends Component {
  componentWillMount() {
    this.props.fetchTags();
  }
  renderTags() {
    console.log("renderTagsStart");
    console.log(this.props.tags);
    console.log("renderTagsEnd");
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
      <div className="side-bar">
        <div className="profile">
          <img className="img-circle" src="../../image/me.jpg" />
          <h3>关于我</h3>
          <p>职业:产品/前端，爱好:画画。
            在这里记录日常生活，所思所想，以及技术学习心得。
          </p>
        </div>
        <div className="category-list">
          <h3>标签</h3>
          <ul className="tag-list">
            {this.renderTags()}
          </ul>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state){
  return { tags: state.tags.all };
}

export default connect(mapStateToProps, { fetchTags })(SideBar);
