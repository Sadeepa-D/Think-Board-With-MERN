import React from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, ChevronRight } from "lucide-react";
import "./NoteCard.css";

const NoteCard = ({ id, title, content, ondelete }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="note_card" onClick={() => navigate(`/viewnotes/${id}`)}>
        <div className="note_card_header">
          <h3>{title}</h3>
          <ChevronRight size={20} className="chevron_icon" />
        </div>
        <p>{content}</p>
        <div className="note_card_footer">
          <button
            className="dt_btn"
            onClick={(e) => {
              e.stopPropagation();
              ondelete(id);
            }}
            title="Delete note"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
