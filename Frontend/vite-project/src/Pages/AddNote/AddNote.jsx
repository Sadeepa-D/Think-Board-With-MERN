import React from "react";
import "./AddNote.css";

const AddNote = () => {
  return (
    <>
      <h1 className="addnote_title">Save Your Thinks From Here</h1>
      <div className="add_nt_form">
        <form>
          <table>
            <tr>
              <td>title:</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>Content:</td>
              <td>
                <textarea></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <button>Add</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};
export default AddNote;
