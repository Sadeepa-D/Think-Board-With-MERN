import React from "react";
import { useNavigate } from "react-router-dom";
import "./NoteCard.css";

const NoteCard = ({ id, title, content, ondelete }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="note_card" onClick={() => navigate(`/viewnotes/${id}`)}>
        <h3>{title}</h3>
        <p>{content}</p>
        <button
          className="dt_btn"
          onClick={(e) => {
            e.stopPropagation();
            ondelete(id);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default NoteCard;
