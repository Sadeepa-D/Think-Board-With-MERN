import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddNote.css";
import api from "../../lib/axios.js";

const AddNote = () => {
  const [title, setaddtitle] = useState("");
  const [content, setaddcontent] = useState("");
  const [message, setmassage] = useState("");

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Reqiured all Fields");
      return;
    }
    try {
      const res = await api.post("/addnotes", {
        title,
        content,
      });
      // setmassage("✅ Note added successfully!");
      toast.success("Note added ");
      navigate("/");
    } catch (error) {
      console.error(error);
      // setmassage(" Failed to add note. Please try again.");
      toast.error("Failed to add note");
    }
  };
  return (
    <>
      <h1 className="addnote_title">Save Your Thinks From Here</h1>
      <div className="add_nt_form">
        <form onSubmit={handlesubmit}>
          <table>
            <tbody>
              <tr>
                <td>title:</td>
                <td>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setaddtitle(e.target.value)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Content:</td>
                <td>
                  <textarea
                    value={content}
                    onChange={(e) => setaddcontent(e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button>Add</button>
                </td>
                {/* <td>
                  <Link to={"/"}>
                    <button className="home_bt">Home</button>
                  </Link>
                </td> */}
              </tr>
            </tbody>
          </table>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};
export default AddNote;
