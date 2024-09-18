import React from "react";
import PostDetails from "../components/PostDetails";

const PostPage = ({ posts, onEdit }) => {
  return (
    <div>
      <PostDetails posts={posts} onEdit={onEdit} />
    </div>
  );
};

export default PostPage;
