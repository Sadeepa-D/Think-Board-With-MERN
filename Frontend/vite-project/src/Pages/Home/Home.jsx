import React from "react";
import "./Home.css";
import NoteCard from "../../Elements/NoteCard";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="home_t">
        <h1 className="h_title">Welcome To Think Board</h1>
        <h3 className="h_motto">Your Thinks here stay forever</h3>
      </div>
      <div className="card_container">
        <NoteCard />
        <br />
        <NoteCard />
      </div>
      <Link to="/addnote">
        <button className="add_note">+</button>
      </Link>
    </>
  );
};
export default Home;
