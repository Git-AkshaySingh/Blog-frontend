// src/components/BlogPostList.js
import React from "react";

const BlogPostList = ({ posts, loading }) => {
  if (loading) return <p>Loading posts...</p>;

  return (
    <div className="container">
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogPostList;
