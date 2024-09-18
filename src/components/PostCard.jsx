import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const PostCard = ({ post, onDelete }) => {
  const { id, title, body } = post;
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{body.substring(0, 100)}...</p>
      <div className="gap">
        <Link to={`/post/${id}`} className="read-more">
          Read More
        </Link>

        <button onClick={() => onDelete(id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
