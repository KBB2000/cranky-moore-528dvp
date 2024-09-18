import React from "react";
import PostCard from "./PostCard";
import "../styles.css";

const PostList = ({ posts, onDelete }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;
