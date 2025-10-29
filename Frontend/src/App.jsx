import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NoteDetailsPage } from "./Pages/NoteDetailsPage";
import { CreatePage } from "./Pages/CreatePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/notedetails/:id" element={<NoteDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
