import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Builder from "./components/Builder";

const App = () => {
  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/builder" element={<Builder />} />
          </Routes>
        </Router>
      </DndProvider>
    </div>
  );
};

export default App;
