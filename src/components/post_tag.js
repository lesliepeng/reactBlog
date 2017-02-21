import React from 'react';

const PostTag = ({tag}) => {

  if(tag === "画画") {
    return (
      <span className="blog-category blog-red-back"><p>{tag}</p></span>
    );
  }
  return (
    <span className="blog-category"><p>{tag}</p></span>
  );
};

export default PostTag;
