import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "views/HomePage";
import SearchPage from "views/SearchPage";
import CollectionPage from "views/CollectionPage";
const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/collection" element={<CollectionPage />} />
    </Routes>
  );
};

export default Content;
