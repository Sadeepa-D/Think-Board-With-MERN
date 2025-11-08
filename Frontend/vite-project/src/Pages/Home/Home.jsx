import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import NoteCard from "../../Elements/NoteCard/NoteCard";
import NoNote from "../../Elements/NoNote/NoNote";
import api from "../../lib/axios.js";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export const Home = () => {
  const [notes, setnotes] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  // FIX 1: Remove 'async' from useEffect callback
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get("/viewnotes");
        setnotes(response.data);
        setloading(false);
      } catch (err) {
        console.error(err);
        seterror("Failed to get notes");
        setloading(false);
      }
    };

    fetchNotes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handledelete = async (id) => {
    const confrimdelete = window.confirm(
      "Are you Sure You Want to Remove your Think"
    );
    if (!confrimdelete) {
      return;
    }
    try {
      await api.delete(`/deletenotes/${id}`);
      setnotes(notes.filter((note) => note._id !== id));
      toast.success("Successfully deleted");
    } catch (error) {
      console.error("Error Deleting note", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <>
      <div className="home_t">
        <h1 className="h_title">Welcome To Think Board</h1>
        <h3 className="h_motto">Your Thinks stay here forever</h3>
      </div>
      <div className="card_container">
        {notes.length === 0 ? (
          <NoNote />
        ) : (
          notes.map((note) => (
            <NoteCard
              key={note._id}
              id={note._id}
              title={note.title}
              content={note.content}
              ondelete={handledelete}
            />
          ))
        )}
      </div>
      <Link to="/addnote">
        <button className="add_note">+</button>
      </Link>
    </>
  );
};

export default Home;
