// src/App.js
import React, { useState, useEffect } from "react";
import BlogPostList from "./components/BlogPostList";
import AddPostForm from "./components/AddPostForm";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Header/>
      <AddPostForm onPostAdded={fetchPosts} />
      <BlogPostList posts={posts} loading={loading} />
    </div>
  );
}

export default App;
