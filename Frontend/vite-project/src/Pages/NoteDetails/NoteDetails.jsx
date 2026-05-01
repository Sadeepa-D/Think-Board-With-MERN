import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./NoteDetails.css";
import toast from "react-hot-toast";
import { Save, Trash2, ArrowLeft } from "lucide-react";

export const NoteDetails = () => {
  const VITE_URL = import.meta.env.VITE_URL;
  const [Note, setNote] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [Saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    const FetchNote = async () => {
      try {
        const res = await axios.get(`${VITE_URL}/viewnotes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("fetching error", error);
        toast.error("Failed to get note");
      } finally {
        setLoading(false);
      }
    };
    FetchNote();
  }, [id]);
  
  if (Loading) return <div className="loading_text">Loading your note...</div>;
  if (!Note) return <div className="error_text">Note not found</div>;

  const handledelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await axios.delete(`${VITE_URL}/deletenotes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/");
    } catch (error) {
      console.log("Cannot delete note", error);
      toast.error("Delete failed");
    }
  };

  const handlesave = async (e) => {
    e.preventDefault();
    if (!Note.title.trim() || !Note.content.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    setSaving(true);
    try {
      await axios.put(`${VITE_URL}/updatenotes/${id}`, Note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Note update failed", error);
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <h1 className="updatenote_title">
        <ArrowLeft 
          size={28} 
          className="back_icon" 
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        Update Your Think
      </h1>
      <div className="update_nt_form">
        <form onSubmit={handlesave}>
          <div className="form_group">
            <label className="form_label" htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Note title..."
              value={Note.title}
              onChange={(e) =>
                setNote({ ...Note, title: e.target.value })
              }
              disabled={Saving}
            />
          </div>
          <div className="form_group">
            <label className="form_label" htmlFor="content">Content</label>
            <textarea
              id="content"
              placeholder="Note content..."
              value={Note.content}
              onChange={(e) =>
                setNote({ ...Note, content: e.target.value })
              }
              disabled={Saving}
              rows="12"
            />
          </div>
          <div className="button_row">
            <button
              type="submit"
              className="update_btn"
              disabled={Saving}
            >
              <Save size={20} />
              {Saving ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              className="delete_btn"
              onClick={handledelete}
              disabled={Saving}
            >
              <Trash2 size={20} />
              Delete
            </button>
            <button
              type="button"
              className="back_btn"
              onClick={() => navigate("/")}
              disabled={Saving}
            >
              <ArrowLeft size={20} />
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default NoteDetails;
