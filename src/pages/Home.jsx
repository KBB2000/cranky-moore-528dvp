import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handleDelete = (id) => {
    const updatedPosts = filteredPosts.filter((post) => post.id !== id);
    setFilteredPosts(updatedPosts);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {filteredPosts.length > 0 ? (
        <PostList posts={filteredPosts} onDelete={handleDelete} />
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default Home;
