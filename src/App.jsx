import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleEdit = (id, updatedTitle, updatedBody) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, title: updatedTitle, body: updatedBody }
          : post
      )
    );
  };

  return (
    <Routes>
      <Route exact path="/" element={<Home posts={posts} />} />
      <Route
        path="/post/:id"
        element={<PostPage posts={posts} onEdit={handleEdit} />}
      />
    </Routes>
  );
}

export default App;
