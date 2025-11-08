import React from "react";
import "./NoNote.css";

const NoNote = () => {
  return (
    <>
      <div className="no_note_container">
        <div className="no_note_glow"></div>
        
        <div className="no_note_icon">
          <span className="no_note_emoji">📝</span>
        </div>
        
        <h1 className="no_note_title">No Notes Yet</h1>
        
        <p className="no_note_subtitle">
          Your think board is empty. Start capturing your thoughts, ideas, and memories by creating your first note!
        </p>
        
        <div className="no_note_hint">
          <span>Click the</span>
          <span className="no_note_plus_icon">+</span>
          <span>button to add your first note</span>
        </div>
      </div>
    </>
  );
};

export default NoNote;