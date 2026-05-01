import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Save, Home, FileText } from "lucide-react";
import "./AddNote.css";

const AddNote = () => {
  const VITE_URL = import.meta.env.VITE_URL;
  const [title, setaddtitle] = useState("");
  const [content, setaddcontent] = useState("");
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Required all Fields");
      return;
    }
    setloading(true);
    try {
      const res = await axios.post(`${VITE_URL}/addnotes`, {
        title,
        content,
      });
      toast.success("Note added successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add note");
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <h1 className="addnote_title">
        <FileText size={32} style={{ display: "inline-block", marginRight: "0.5rem" }} />
        Save Your Thinks
      </h1>
      <div className="add_nt_form">
        <form onSubmit={handlesubmit}>
          <div className="form_group">
            <label htmlFor="title" className="form_label">
              <FileText size={18} />
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => setaddtitle(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form_group">
            <label htmlFor="content" className="form_label">
              <FileText size={18} />
              Content
            </label>
            <textarea
              id="content"
              placeholder="Write your thoughts here..."
              value={content}
              onChange={(e) => setaddcontent(e.target.value)}
              disabled={loading}
              rows="12"
            ></textarea>
          </div>

          <div className="form_actions">
            <button type="submit" className="submit_btn" disabled={loading}>
              <Save size={20} />
              {loading ? "Saving..." : "Save Note"}
            </button>
            <Link to="/">
              <button type="button" className="home_btn">
                <Home size={20} />
                Back Home
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNote;
