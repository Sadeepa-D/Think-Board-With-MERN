import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import NoteCard from "../../Elements/NoteCard";
import { Link } from "react-router-dom";

export const Home = () => {
  const [notes, setnotes] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/sadeepa/viewnotes")
      .then((response) => {
        setnotes(response.data);
        setloading(false);
      })
      .catch((err) => {
        console.error(err);
        seterror("faild to get notes");
        setloading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handledelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/sadeepa/deletenotes/${id}`);
      setnotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error Deleting note", error);
    }
  };
  return (
    <>
      <div className="home_t">
        <h1 className="h_title">Welcome To Think Board</h1>
        <h3 className="h_motto">Your Thinks stay here forever</h3>
      </div>
      <div className="card_container">
        {notes.map((note) => (
          <NoteCard
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            ondelete={handledelete}
          />
        ))}
      </div>
      <Link to="/addnote">
        <button className="add_note">+</button>
      </Link>
    </>
  );
};
export default Home;
