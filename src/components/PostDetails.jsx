import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles.css";

const PostDetails = ({ posts, onEdit }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(post?.title);
  const [updatedBody, setUpdatedBody] = useState(post?.body);

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleEdit = () => {
    onEdit(post.id, updatedTitle, updatedBody);
    setIsEditing(false);
  };

  return (
    <div className="post-details">
      {isEditing ? (
        <div>
          <input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedBody}
            onChange={(e) => setUpdatedBody(e.target.value)}
          ></textarea>
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <Link to="/" className="back-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default PostDetails;
