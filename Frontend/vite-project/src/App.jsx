import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddNote from "./Pages/AddNote/AddNote";
import NoteDetails from "./Pages/NoteDetails/NoteDetails";
import Footer from "./Elements/Footer/Footer";
import "./App.css"

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addnote" element={<AddNote />}></Route>
        <Route path="/viewnote" element={<NoteDetails />}></Route>
      </Routes>
      <Footer/>
    </>
  );
};
export default App;
