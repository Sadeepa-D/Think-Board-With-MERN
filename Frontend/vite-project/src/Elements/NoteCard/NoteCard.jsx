import React from "react";
import "./NoteCard.css";

const NoteCard = ({ id, title, content, ondelete }) => {
  return (
    <>
      <div className="note_card">
        <h3>{title}</h3>
        <p>{content}</p>
        <button className="dt_btn" onClick={() => ondelete(id)}>
          delete
        </button>
      </div>
    </>
  );
};

export default NoteCard;
