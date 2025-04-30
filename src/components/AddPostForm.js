// src/components/AddPostForm.js
import React, { useState } from "react";
import axios from "axios";

const AddPostForm = ({ onPostAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/add_post", {
        title,
        content,
      });
      setMessage(res.data.message);
      setTitle("");
      setContent("");
      if (onPostAdded) onPostAdded();
    } catch (err) {
      console.error("Error adding post:", err);
      setMessage("Failed to add post.");
    }
  };

  return (
    <div className="container mt-3">
      <h1>Add New Post</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            Post Title
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Add Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <label for="exampleInputText" class="form-label">
          Post Content
        </label>
        <div class="input-group">
          <textarea
            class="form-control"
            aria-label="With textarea"
            placeholder="Post Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-sm my-3">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddPostForm;
