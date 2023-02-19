import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NotFoundPage from "./components/NotFoundPage";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/:id" element={<SingleArticle />} />
        {/* <React path="*" element={NotFoundPage} /> */}
      </Routes>
    </div>
  );
}

export default App;
