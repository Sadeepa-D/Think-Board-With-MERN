import React from "react";
import "./NoteDetails.css";

export const NoteDetails = () => {
  return (
    <>
      <h1 className="updatenote_title">Update Your Think</h1>
      <div className="update_nt_form">
        <form>
          <table>
            <tbody>
              <tr>
                <td>Title:</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>Content:</td>
                <td>
                  <textarea />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="button_row">
                  <button type="submit" className="update_btn">
                    Update
                  </button>
                  <button type="button" className="delete_btn">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};
export default NoteDetails;
