import React from "react";
import "./NoteCard.css";

const NoteCard = ({ title, content }) => {
  return (
    <>
      <div className="note_card">
        <h3>{title}</h3>
        <p>{content}</p>
        <button className="dt_btn">delete</button>
      </div>
    </>
  );
};

export default NoteCard;
