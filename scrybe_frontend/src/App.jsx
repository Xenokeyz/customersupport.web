import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dummy />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
    </Routes>
  );
}

export default App;
