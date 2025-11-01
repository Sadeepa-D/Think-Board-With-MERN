import React from "react";
import "./Home.css";
import NoteCard from "../../Elements/NoteCard";

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

      <button className="add_note">+</button>
    </>
  );
};
export default Home;
